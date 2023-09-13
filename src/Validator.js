import StringSchema from './StringSchema.js';

class Validator {
  string() {
    return new StringSchema(this);
  }
}

export default Validator;
