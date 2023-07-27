import Validator from './src/Validator.js';

const v = new Validator();

const schema = v.object();

// Позволяет описывать валидацию для свойств объекта
schema.shape({
  name: v.string().required(),
  age: v.number().positive(),
});

console.log(schema.isValid({ name: 'kolya', age: 100 })); // true
console.log(schema.isValid({ name: 'maya', age: null })); // true
console.log(schema.isValid({ name: '', age: null })); // false
console.log(schema.isValid({ name: 'ada', age: -5 })); // false
// schema.isValid({ name: 'maya', age: null }); // true
// schema.isValid({ name: '', age: null }); // false
// schema.isValid({ name: 'ada', age: -5 }); // false
