import test from 'tape';
import request from 'supertest';
import {app} from '../src/index';

test('-------- Controller: Delete /newspaper', (assert) => {
  const url = '/newspaper';
  const message = 'Status must be 404 and response must match with expected response';

  const expectedResponse = {
    "status": 404
  }

  const statusCodeExpected = 404;
  request(app)
      .delete(url)
      .expect(statusCodeExpected)
      .then((response) => {
          const newspaper = response.body;
          assert.deepEqual(newspaper, expectedResponse, message);
          assert.end();
      }, (err) => {
          assert.fail(err.message);
          assert.end();
      });
});
