'use strict';

const { server } = require('../server.js');
const supertest = require('supertest');
const request = supertest(server);

describe('Testing our Person Server', () => {
  it('should reject requests on a bad route', async () => {
    const response = await request.delete('/person?name=Foo');
    expect(response.status).toBe(404);
  });
  it('Should reject requests on a bad method', async () => {
    const response = await request.put('/person?name=Foo');
    expect(response.status).toBe(404);
  });
  it('Should reject requests with no name in the query string', async () => {
    const response = await request.patch('/person');
    expect(response.status).toBe(500);
  });
  it('Should accept requests with name in the query string', async () => {
    const response = await request.get('/person?name=Foo');
    expect(response.status).toBe(200);
  });
  it('Should respond with a string on GET to /person', async () => {
    const response = await request.get('/person?name=Foo');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Foo');
  });
});
