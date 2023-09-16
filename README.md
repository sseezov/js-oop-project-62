### Hexlet tests and linter status:
[![Actions Status](https://github.com/sseezov/js-oop-project-62/workflows/hexlet-check/badge.svg)](https://github.com/sseezov/js-oop-project-62/actions)

# Валидатор данных

Данный проект позволяет валидировать строки, числа, массивы и поля объектов. Для этого можно использовать как набор встроенных методов, так и пользовательские функции.

## Пример работы

```javascript
const v = new Validator();

const schema = v.string();

schema.isValid(''); // true
schema.isValid(null) // true
schema.isValid(undefined) // true

schema.required();

schema.isValid('what does the fox say'); // true
schema.isValid('hexlet'); // true
schema.isValid(null); // false
schema.isValid(''); // false
```

# Системные требования

Node.js, желательно 20 версии.

# Установка

```bash
git clone git@github.com:sseezov/frontend-project-46.git
cd frontend-project-46
npm i или make install
```
