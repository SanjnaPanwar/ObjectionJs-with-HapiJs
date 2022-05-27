
exports.up = function(knex) {
    knex.schema.hasTable('video').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('video',(table)=>{
                table.increments('id');
                table.string('title').notNullable();
                // table.integer('channel_id').references('channel.id');
                table.integer('channel_id').unsigned().notNullable();
                table.foreign('channel_id').references('channel.id').onDelete('cascade');
                table.timestamps(true, true);
            });

        };
    });
    
  
};


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('video');
};
