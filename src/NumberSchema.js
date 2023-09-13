import check from '../utils/check.js';
import isValid from '../utils/isValid.js';

class NumberSchema {
  constructor(schema) {
    this.isRequired = false;
    this.validators = [this.checkIsNumber];
    this.schema = schema;
    this.isPositive = false;
    this.ranges = { min: -Infinity, max: Infinity };
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

  range(min, max) {
    this.ranges.min = min;
    this.ranges.max = max;
    this.validators.push(this.checkRange);
    return this;
  }

  positive() {
    this.validators.push(this.checkIsPositive);
    this.isPositive = true;
    return this;
  }

  checkIsNumber(value) {
    const validate = (number) => typeof number === 'number' || number === null || number === undefined;
    const isNumber = validate(value);
    if (!this.isRequired && isNumber) {
      return true;
    }

    return check(this.isRequired, value, validate);
  }

  checkIsPositive(value) {
    const validate = (number) => number > 0;

    return check(this.isRequired, value, validate);
  }

  checkRange(value) {
    const validate = (number) => number >= this.ranges.min && number <= this.ranges.max;

    return check(this.isRequired, value, validate);
  }
}

export default NumberSchema;
