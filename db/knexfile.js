
module.exports = {


  development: {
    client: 'mysql',
    connection: {
      database: 'objection_crud',
      user:     'root',
      password: '@Laddu123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds:{
      directory:'./seeds'
    }
  },

};
