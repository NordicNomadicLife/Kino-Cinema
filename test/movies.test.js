import { expect, test, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import initApp from '../app.js';

const app = initApp();
let server;

beforeAll(() => {
  server = app.listen(5080); 
});

afterAll(() => {
  server.close(); 
});

test(
  'allMovies page shows list of movies',
  async () => {
    const response = await request(app)
      .get('/allMovies') 
      .expect('Content-Type', /html/) 
      .expect(200); 

    expect(response.text).toMatch('Pulp Fiction');
    expect(response.text).toMatch('Fire Walk With Me');
    expect(response.text).toMatch('Isle of dogs');
  },
  20000 
);
