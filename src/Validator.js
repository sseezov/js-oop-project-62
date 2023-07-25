export default class Validator {
  constructor() {
    this.string = function string() {
      return {
        shoudContain: [],
        isRequired: false,
        isValid: function isValid(value) {
          if (!this.isRequired) {
            return true;
          }
          if (this.shoudContain.length === 0) {
            return !!value;
          }
          const contains = value ? value.split(' ').filter((word) => this.shoudContain.includes(word)) : null;
          return contains.length === this.shoudContain.length && !!value;
        },
        required: function required() {
          this.isRequired = !this.isRequired;
        },
        contains: function contains(value) {
          this.shoudContain.push(value);
          return this;
        },
      };
    };
  }
}
