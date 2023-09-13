import test from 'node:test';
import { strict as assert } from 'node:assert';
import Validator from '../src/Validator.js';

test('Number validation', async (t) => {
  await t.test('Create non required number schema', () => {
    const validator = new Validator();
    const schema = validator.number();

    assert.equal(schema.isValid(null), true);
    assert.equal(schema.isValid(undefined), true);
    assert.equal(schema.isValid(123), true);
    assert.equal(schema.isValid(''), false);
  });

  await t.test('Create required number schema', () => {
    const validator = new Validator();
    const schema = validator.number().required();

    assert.equal(schema.isValid(null), false);
    assert.equal(schema.isValid(undefined), false);
    assert.equal(schema.isValid(''), false);
    assert.equal(schema.isValid(123), true);
    assert.equal(schema.isValid(0), true);
  });

  await t.test('Check positive', () => {
    const validator = new Validator();
    const schema = validator.number().required().positive();

    assert.equal(schema.isValid(-123), false);
    assert.equal(schema.isValid(0), false);
    assert.equal(schema.isValid(123), true);

    const schema2 = new Validator().number().positive();
    assert.equal(schema2.isValid(null), true);
  });

  await t.test('Check range', () => {
    const validator = new Validator();
    const schema = validator.number().required().range(-10, 10);

    assert.equal(schema.isValid(-123), false);
    assert.equal(schema.isValid(123), false);
    assert.equal(schema.isValid(0), true);
    assert.equal(schema.isValid(-10), true);
    assert.equal(schema.isValid(10), true);
  });
});
