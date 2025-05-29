const request = require('supertest');
const { app, server } = require('./app');

describe('GET /', () => {
  it('responds with Hello World from Jenkins!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World from Jenkins!');
  });

  afterAll(() => {
    server.close();  
  });
});
