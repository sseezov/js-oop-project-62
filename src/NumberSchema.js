export default class NumberSchema {
  constructor(schema) {
    this.isRequired = false;
    this.schema = schema;
    this.ranges = {
      min: -Infinity,
      max: Infinity,
    };
  }

  required() {
    this.isRequired = true;
  }
}
