const isValid = ({ context, validators, value }) => {
  console.log(123, value)
  for (const validate of validators) {
    if (!validate.call(context, value)) {
      return false;
    }
  }

  return true;
};

export default isValid;
