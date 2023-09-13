import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';

class Validator {
  string() {
    return new StringSchema(this);
  }

  number() {
    return new NumberSchema(this);
  }
}

export default Validator;
