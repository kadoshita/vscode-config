import Fastify, { FastifyInstance } from 'fastify';

export const fastify: FastifyInstance = Fastify({
    logger: true,
});

// Declare a route
fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' };
});
