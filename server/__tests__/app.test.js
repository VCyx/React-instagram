const request = require('supertest');
const app = require('./app');

test('/', async () => {
    await request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(({ body }) => {
            expect(body).toEqual({ pong: true });
        });
});