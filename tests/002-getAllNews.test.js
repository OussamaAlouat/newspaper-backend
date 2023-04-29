import test from 'tape';
import request from 'supertest';
import { app } from '../src/index';

test('-------- Controller: Get /newspaper', (assert) => {
  const url = '/newspaper';
  const message = 'Status must be 200 and response must contain some newspapers';

  const statusCodeExpected = 200;
  request(app)
    .get(url)
    .expect(statusCodeExpected)
    .then((response) => {
      const documents = response.body.data;
      assert.equal(documents.length > 0, true, message);
      assert.end();
    }, (err) => {
      assert.fail(err.message);
      assert.end();
    });
});