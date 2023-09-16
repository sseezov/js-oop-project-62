import isValid from '../utils/isValid.js';

class ObjectSchema {
  constructor() {
    this.isRequired = true;
    this.objectSchema = {};
  }

  shape(object) {
    this.objectSchema = object;
    return this;
  }

  isValid(value) {
    if (value === undefined
      || !this.objectSchema) {
      return false;
    }

    if (value === null) {
      return true;
    }

    const checks = Object
      .keys(value)
      .map((key) => {
        const validator = this.objectSchema[key];
        const currentValue = value[key];

        if (validator === undefined) {
          return false;
        }

        if (typeof currentValue === 'object' && !Array.isArray(currentValue) && currentValue !== null) {
          return this.isValid.call(validator, currentValue);
        }

        const valid = isValid(
          { context: validator, validators: validator.validators, value: currentValue },
        );
        return valid;
      });
    return !checks.includes(false);
  }
}

export default ObjectSchema;
