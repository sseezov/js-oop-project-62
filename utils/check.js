import isNull from './isNull.js';

const check = (required, value, validate) => {
  if (!required) {
    return isNull(value) || validate(value);
  }
  return !isNull(value) && validate(value);
};

export default check;
