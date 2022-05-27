exports.up = function (knex) {
    return knex.schema.createTable('channel', (table) => {
        table.increments('id').primary();
        table.string('channel_name').notNullable();
        table.timestamps(true, true);
    })
    
    
};


exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('channel');
};
