import test from 'node:test';
import { strict as assert } from 'node:assert';
import Validator from '../src/Validator.js';

test('Objects validation', async (t) => {
  await t.test('Plain objects', () => {
    const validator = new Validator();
    const schema = validator.object().shape({
      name: validator.string().required().minLength(5),
      age: validator.number().positive(),
      skills: validator.array().sizeOf(2),
    });

    assert.equal(schema.isValid(null), false);
    assert.equal(schema.isValid({ name: 'solo' }), false);

    const nullableSchema = validator.object().shape({
      name: validator.string(),
      age: validator.number(),
    });

    assert.equal(nullableSchema.isValid({
      name: null,
      age: null,
    }), true);
  });

  await t.test('Nested objects', () => {
    const validator = new Validator();

    const nestedSchema = validator.object().shape({
      user: validator.object().shape({
        name: validator.string().required(),
        age: validator.number().positive().range(18, 60),
      }),
      paymentInfo: validator.object().shape({
        card: validator.string().required(),
        bin: validator.string().required(),
      }),
    });

    assert.equal(nestedSchema.isValid({
      user: {
        name: 'solo',
        age: 20,
      },
      paymentInfo: {
        card: '9999-8888-7777',
        bin: '#12333449',
      },
    }), true);
  });
});
