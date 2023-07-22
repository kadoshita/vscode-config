import { fastify } from '../src/server';

describe('main', () => {
    test('receive root path response', async () => {
        const response = await fastify.inject('/');

        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toStrictEqual({
            hello: 'world',
        });
    });
});
