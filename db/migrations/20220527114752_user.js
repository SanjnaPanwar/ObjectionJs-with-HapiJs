
exports.up = function (knex) {
    knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('user', (table) => {
                table.increments('id').primary();
                table.string('user_name').notNullable();
                table.string('email').notNullable().unique();
                table.string('password');
                // table.integer('channel_id').references('channel.id');
                table.integer('channel_id').unsigned().notNullable();
                table.foreign('channel_id').references('channel.id').onDelete('cascade');
                table.timestamps(true, true);
            });

        };
    });
}
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('user');
};
