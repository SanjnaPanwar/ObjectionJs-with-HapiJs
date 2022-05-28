const dbSetup = require('./db/db_setup');
const Hapi = require('@hapi/hapi');
const User = require('./db/models/user');
dbSetup();  

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // Home  page..
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            try {
                return h.response('Hello from Sanjna..!');
            } catch (error) {
                return h.response(error);
            }

        }
    });

    // GET all users..
    server.route({
        method: 'GET',
        path: '/user',
        handler: async (request, h) => {
            try {
                const user = await User.query().select("*").from('user');
                return h.response(user);
            } catch (error) {
                return h.response(error);
            }

        }
    });

    // GET user by id..
    server.route({
        method: 'GET',
        path: '/user/{id}',
        handler: async (request, h) => {
            try {
                const user = await User.query()
                    .select("*").from('user')
                    .where('id', request.params.id);
                return h.response(user);
            } catch (error) {
                return h.response(error);
            }

        }
    });

    // POST user details..
    server.route({
        method: 'POST',
        path: '/post',
        handler: async (request, h) => {
            try {
                const user = await User.query().insert({
                    user_name: request.payload.user_name,
                    email: request.payload.email,
                    password: request.payload.password,
                    channel_id: request.payload.channel_id
                })
                return h.response('user post details');
            } catch (error) {
                return h.response(error);
            }
        }
    });

    // UPDATE/PUT user by id..
    server.route({
        method: 'PUT',
        path: '/update/{id}',
        handler: async (request, h) => {
            try {
                const user = await User.query().update({
                    user_name: request.payload.user_name,
                    email: request.payload.email,
                    password: request.payload.password,
                    channel_id: request.payload.channel_id
                }).where('id',request.params.id)
                return (h.response('user updated successfully'));
            } catch (error) {
                return h.response(error);
            }
        }
    });

    // DELETE user by id.
    server.route({
        method: 'DELETE',
        path: '/delete/{id}',
        handler: async (request, h) => {
            try {
                const user = await User.query().where('id', request.params.id).delete()
                return h.response(user);
            } catch (error) {
                return h.response(error);
            }
        }
    });

    // server start..
    await server.start();
    console.log('Server running on', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
