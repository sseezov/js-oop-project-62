import Validator from '../src/Validator.js';

describe('string tests', () => {
  const v = new Validator();
  const schema = v.string();
  test('isValid before required ""', () => {
    expect(schema.isValid('')).toBeTruthy();
  });
  test('isValid before required null', () => {
    expect(schema.isValid(null)).toBeTruthy();
  });
  test('isValid before required undefined', () => {
    expect(schema.isValid(undefined)).toBeTruthy();
  });
  test('after required: what does the fox say', () => {
    schema.required();
    expect(schema.isValid('what does the fox say')).toBeTruthy();
  });
  test('after required: hexlet', () => {
    expect(schema.isValid('hexlet')).toBeTruthy();
  });
  test('after required: null', () => {
    expect(schema.isValid(null)).toBeFalsy();
  });
  test('after required: contains(what).isValid', () => {
    expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
  });
  test('after required: contains(whatthe).isValid', () => {
    expect(schema.contains('whatthe').isValid('what does the fox say')).toBeFalsy();
  });
  test('after required: after contains: what does the fox say', () => {
    expect(schema.isValid('what does the fox say')).toBeFalsy();
  });
});

describe('number tests', () => {
  const v = new Validator();
  const num = v.number();
  test('isValid before required null', () => {
    expect(num.isValid(null)).toBeTruthy();
  });
  test('isValid after required undefined', () => {
    num.required();
    expect(num.isValid(null)).toBeFalsy();
  });
  test('after required: 7', () => {
    expect(num.isValid(7)).toBeTruthy();
  });
  test('after required: positive: 7', () => {
    expect(num.positive().isValid(7)).toBeTruthy();
  });
  test('after required: positive: range: -5 5: -3', () => {
    num.range(-5, 5);
    expect(num.isValid(-3)).toBeFalsy();
  });
  test('after required: positive: range: -5 5: 5', () => {
    expect(num.isValid(5)).toBeTruthy();
  });
});
