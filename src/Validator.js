import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';

class Validator {
  string() {
    return new StringSchema(this);
  }

  number() {
    return new NumberSchema(this);
  }

  array() {
    return new ArraySchema(this);
  }
}

export default Validator;
