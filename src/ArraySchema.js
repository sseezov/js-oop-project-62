import check from '../utils/check.js';
import isValid from '../utils/isValid.js';

class NumberSchema {
  constructor(schema) {
    this.isRequired = false;
    this.validators = [this.checkIsArray];
    this.schema = schema;
    this.size = 0;
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

  sizeOf(length) {
    this.size = length;
    this.validators.push(this.checkSize);
    return this;
  }

  checkSize(value) {
    const validate = (array) => array.length === this.size;

    return check(this.isRequired, value, validate);
  }

  checkIsArray(value) {
    const validate = (array) => Array.isArray(array);
    if (!this.isRequired && validate(value)) {
      return true;
    }

    return check(this.isRequired, value, validate);
  }
}

export default NumberSchema;
