import Validator from './src/Validator.js';

const v = new Validator();

const schema = v.array();

console.log(schema.isValid(null)); // true
schema.required();
console.log(schema.isValid(null)); // true
console.log(schema.isValid([])); // true
console.log(schema.isValid(['hexlet'])); // true
schema.sizeof(2);
console.log(schema.isValid(['hexlet'])); // true
console.log(schema.isValid(['hexlet', 'code-basics'])); // true

// schema.isValid(null); // false
// schema.isValid([]); // true
// schema.isValid(['hexlet']); // true

// schema.isValid(['hexlet']); // false
// schema.isValid(['hexlet', 'code-basics']); // true
