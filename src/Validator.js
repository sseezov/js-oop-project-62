import _ from "lodash";

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
          this.isRequired = true;
          return this;
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
          this.isRequired = true;
          return this;
        },
        isValid: function isValid(value) {
          const num = this.isRequired ? value : Number(value);
          if (!this.isRequired) {
            if (!(num >= 0 || num < 0)) {
              return false;
            }
          } if (this.ranges.length > 0) {
            if (this.isPositive) {
              return typeof num === 'number' && num >= 0
                && num >= this.ranges[0] && num <= this.ranges[1];
            }
            return typeof num === 'number' && num >= this.ranges[0] && num <= this.ranges[1];
          } if (this.isPositive) {
            return typeof num === 'number' && num >= 0;
          }
          return typeof num === 'number';
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
    this.array = function array() {
      return {
        isRequired: false,
        required: function required() {
          this.isRequired = true;
          return this;
        },
        size: false,
        sizeof: function sizeof(value) {
          this.size = value;
          return this;
        },
        isValid: function isValid(value) {
          if (!this.isRequired) {
            return true;
          }
          if (!this.size) {
            return Array.isArray(value);
          }
          return Array.isArray(value) && value.length === this.size;
        },
      };
    };
    this.object = function object() {
      return {
        names: false,
        values: false,
        shape: function shape(obj) {
          this.names = Object.keys(obj);
          this.values = Object.values(obj);
        },
        isValid: function isValid(obj) {
          if (!_.isEqual(Object.keys(obj), this.names)) {
            return false;
          }
          const keysValidation = this.values.map((value, i) => {
            const check = value.isValid(obj[this.names[i]]);
            return check;
          });
          return keysValidation.indexOf(false) < 0;
        },
      };
    };
  }
}
