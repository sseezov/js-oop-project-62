import check from '../utils/check.js';
import isValid from '../utils/isValid.js';

class StringSchema {
  constructor(schema) {
    this.isRequired = false;
    this.expected = {};
    this.validators = [this.checkIsString];
    this.schema = schema;
    this.strMinLength = 0;
    this.subStrings = [];
  }

  required() {
    this.isRequired = true;
    return this;
  }

  isValid(value) {
    return isValid(
      { context: this, validators: this.validators, value },
    );
  }

  minLength(minLength) {
    this.strMinLength = minLength;
    this.validators.push(this.checkMinLength);
    return this;
  }

  contains(subString) {
    this.subStrings.push(subString);

    if (!this.validators.includes(this.checkContains)) {
      this.validators.push(this.checkContains);
    }

    return this;
  }

  checkIsString(value) {
    const validate = (str) => typeof str === 'string' && str.length > 0;
    if (!this.isRequired && value === '') {
      return true;
    }

    return check(this.isRequired, value, validate);
  }

  checkMinLength(value) {
    const minLength = this.strMinLength;
    const validate = (str) => str.length >= minLength;

    return check(this.isRequired, value, validate);
  }

  checkContains(value) {
    const { subStrings } = this;
    const validate = (str) => Array
      .from(subStrings)
      .every((subString) => str.search(new RegExp(subString)) > -1);

    return check(this.isRequired, value, validate);
  }

  test(validatorName, value) {
    console.log(this.schema);
    const validator = this.schema.filter((validatorFn) => validatorFn.name === validatorName)[0];
    const validate = (string) => validator(string, value);
    this.validators.push(validate);

    return this;
  }
}

export default StringSchema;
