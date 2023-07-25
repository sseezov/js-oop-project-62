import Validator from './src/Validator.js';

const v = new Validator();

const schema = v.string();
const num = v.number();

console.log(schema.isValid(''));
console.log(schema.isValid(null));
console.log(schema.isValid(undefined));
console.log(num.isValid(null));
console.log('after required');
schema.required();
console.log(num.isValid(null));
console.log(num.isValid(7));
console.log(num.positive().isValid(7));
console.log(1);

num.range(-5, 5);
console.log(num.isValid(-3));
console.log(num.isValid(5));
console.log(2);
console.log(schema.isValid('what does the fox say'));
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
