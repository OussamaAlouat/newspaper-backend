import test from 'tape';
import request from 'supertest';
import { app } from '../src/index';

test('-------- Controller: Delete /newspaper -- no id provided ', (assert) => {
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


test('-------- Controller: Delete /newspaper/:id -- no mongoDB id', (assert) => {
  const url = '/newspaper/ThisIdNotIdentifyAnyDocument';
  const message = 'Status must be 422 and response must match with expected response';

  const expectedResponse = {
    errors: [
      {
        type: 'field',
        value: 'ThisIdNotIdentifyAnyDocument',
        msg: 'Invalid value',
        path: 'id',
        location: 'params'
      }
    ]
  };

  const statusCodeExpected = 422;
  request(app)
    .delete(url)
    .expect(statusCodeExpected)
    .then((response) => {
      const newsPaper = response.body;
      assert.deepEqual(newsPaper, expectedResponse, message);
      assert.end();
    }, (err) => {
      assert.fail(err.message);
      assert.end();
    });
});

test('-------- Controller: Delete /newspaper/:id -- id not found on database', (assert) => {
  const url = '/newspaper/644be08d88f82f9a0a50e745';
  const message = 'Status must be 404 and response must match with expected response';

  const expectedResponse = {
    msg: 'The newsPaper is not present on database'
  };


  const statusCodeExpected = 404;
  request(app)
    .delete(url)
    .expect(statusCodeExpected)
    .then((response) => {
      const newsPaper = response.body;
      assert.deepEqual(newsPaper, expectedResponse, message);
      assert.end();
    }, (err) => {
      assert.fail(err.message);
      assert.end();
    });
});


test('-------- Controller: Delete /newspaper/:id -- id is on databases', (assert) => {
  const url = '/newspaper';
  const message = 'Status must be 200 and response must match with expected response';


  const payload = {
    title: 'New newspaper' + new Date(),
    image: 'images ' + new Date(),
    creation_date: new Date(),
    abstract: 'The content of this document is a test',
    languages: ['es', 'fr'],
    publisher: {
      name: 'Oussama Alouat',
      "id": '71212' + new Date(),
    },
    link: 'lin for test' + new Date(),
  };

  const statusCodeExpected = 200;
  request(app)
    .post(url)
    .send(payload)
    .then((resp) => {
      const id = resp.body.data._id;
      const deleteUrl = '/newspaper/'+ id;
      request(app)
        .delete(deleteUrl)
        .expect(statusCodeExpected)
        .then((response) => {
          const newsPaper = response.body._id;
          payload._id = id;
          assert.deepEqual(newsPaper, id, message);
          assert.end();
        }, (err) => {
          assert.fail(err.message);
          assert.end();
        });
    })
});

