import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
  constructor() {
    this.schema = null;
    this.customValidators = {
      string: [],
      number: [],
      array: [],
    };
  }

  getSchema() {
    return this.schema;
  }

  setSchema(schema) {
    this.schema = schema;
  }

  string() {
    this.setSchema(new StringSchema(this.customValidators.string));

    return this.getSchema();
  }

  number() {
    this.setSchema(new NumberSchema(this.customValidators.number));

    return this.getSchema();
  }

  array() {
    this.setSchema(new ArraySchema(this.customValidators.array));

    return this.getSchema();
  }

  object() {
    return new ObjectSchema(this);
  }

  addValidator(type, name, func) {
    this.customValidators[type].push(Object.defineProperty(func, 'name', { value: name }));
  }
}

export default Validator;
