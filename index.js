import Validator from './src/Validator.js';

const v = new Validator();

const schema = v.string();

console.log(schema.isValid(''));
console.log(schema.isValid(null));
console.log(schema.isValid(undefined));
schema.required();
console.log(schema.isValid('what does the fox say'));
console.log(schema.isValid('hexlet'));
console.log(schema.isValid(null));
console.log(schema.isValid(''));
console.log(schema.contains('what').isValid('what does the fox say'));
console.log(schema.contains('whatthe').isValid('what does the fox say')); // false);
console.log(schema.isValid('what does the fox say')); // false); // false);
// console.log(schema.isValid(''));
// console.log(schema.isValid(''));
// console.log(schema.isValid(''));
// console.log(schema.isValid(''));
// console.log(schema.isValid(''));
// schema.isValid(''); // true
// schema.isValid(null); // true
// schema.isValid(undefined); // true

// schema.required();

// schema.isValid('what does the fox say'); // true
// schema.isValid('hexlet'); // true
// schema.isValid(null); // false
// schema.isValid(''); // false

// schema.contains('what').isValid('what does the fox say'); // true
// schema.contains('whatthe').isValid('what does the fox say'); // false

// schema.isValid('what does the fox say'); // false