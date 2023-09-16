import test from 'node:test';
import { strict as assert } from 'node:assert';
import Validator from '../src/Validator.js';

test('String validation', async (t) => {
  await t.test('Create non required string schema', () => {
    const validator = new Validator();
    const schema = validator.string();

    assert.equal(schema.isValid(''), true);
    assert.equal(schema.isValid(null), true);
    assert.equal(schema.isValid(undefined), true);
    assert.equal(schema.isValid('abc'), true);
    assert.equal(schema.isValid(123), false);
  });

  await t.test('Create required string schema', () => {
    const validator = new Validator();
    const schema = validator.string().required();

    assert.equal(schema.isValid(''), false);
    assert.equal(schema.isValid(null), false);
    assert.equal(schema.isValid(undefined), false);
    assert.equal(schema.isValid('abc'), true);
    assert.equal(schema.isValid(123), false);
  });

  await t.test('Check min length', () => {
    const validator = new Validator();
    const schema = validator.string().required().minLength(3);

    assert.equal(schema.isValid('12'), false);
    assert.equal(schema.isValid('123'), true);

    schema.minLength(5);
    assert.equal(schema.isValid('123'), false);
    assert.equal(schema.isValid('12345'), true);

    const validator2 = new Validator();
    const schema2 = validator2.string().minLength(3);
    assert.equal(schema2.isValid('12'), false);
    assert.equal(schema2.isValid('123'), true);
    assert.equal(schema2.isValid(null), true);
  });

  await t.test('Check contains', () => {
    const validator = new Validator();
    const schema = validator.string().required().contains('12');

    assert.equal(schema.isValid('12'), true);
    assert.equal(schema.isValid('123'), true);

    schema.contains('1234');
    assert.equal(schema.isValid('123'), false);
    assert.equal(schema.isValid('12345'), true);
  });

  await t.test('Check testFunc', () => {
    const validator = new Validator();
    const fn = (value, start) => value.startsWith(start);
    validator.addValidator('string', 'startWith', fn);
    const schema = validator.string().test('startWith', 'H');

    assert.equal(schema.isValid('exlet'), false);
    assert.equal(schema.isValid('Hexlet'), true);
  });
});
