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
