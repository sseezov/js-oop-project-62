export default class Validator {
  constructor() {
    this.string = function string() {
      return {
        isRequired: false,
        shoudContain: [],
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
    this.number = function number() {
      return {
        isRequired: false,
        required: function required() {
          this.isRequired = !this.isRequired;
        },
        isValid: function isValid(value) {
          if (!this.isRequired) {
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
