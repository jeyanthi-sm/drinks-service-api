import request from 'supertest';
import { app } from '../controllers/coffee_lover';

describe('Test Coffee Lover endpoint request', () => {
test('GET should return correct message', async () => {
const res = await request(app).get('/coffeelover');
expect(res.statusCode).toEqual(200);
expect(res.text).toEqual('I like coffee!');
});
});