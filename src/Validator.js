export default class Validator {
  constructor() {
    this.isRequired = false;
    this.string = function string() {
      return {
        shoudContain: [],
        isValid: function isValid(value) {
          if (!Validator.isRequired) {
            return true;
          }
          if (this.shoudContain.length === 0) {
            return !!value;
          }
          const contains = value ? value.split(' ').filter((word) => this.shoudContain.includes(word)) : null;
          return contains.length === this.shoudContain.length && !!value;
        },
        required: function required() {
          Validator.isRequired = !Validator.isRequired;
        },
        contains: function contains(value) {
          this.shoudContain.push(value);
          return this;
        },
      };
    };
    this.number = function number() {
      return {
        isValid: function isValid(value) {
          if (!Validator.isRequired) {
            return true;
          } if (this.ranges.length > 0) {
            if (this.isPositive === true) {
              return typeof value === 'number' && value >= 0
                && value >= this.ranges[0] && value <= this.ranges[1];
            }
            return typeof value === 'number' && value >= this.ranges[0] && value <= this.ranges[1];
          } return typeof value === 'number';
        },
        isPositive: false,
        positive: function positive() {
          this.isPositive = true;
          return this;
        },
        ranges: [],
        range: function range(start, end) {
          this.ranges = [start, end];
        },
      };
    };
  }
}
