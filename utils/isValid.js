const isValid = ({ context, validators, value }) => {
  // eslint-disable-next-line
  for (const validate of validators) {
    if (!validate.call(context, value)) {
      return false;
    }
  }

  return true;
};

export default isValid;
