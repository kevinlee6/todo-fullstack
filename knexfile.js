require("dotenv").config();

module.exports = {
  development: {
    client: process.env.DB,
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: { directory: __dirname + "/db/migrations" },
    seeds: { directory: __dirname + "/db/seeds" }
  },

  // staging: {
  //   client: 'pg',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  production: {
    client: process.env.DB,
    connection: process.env.DATABASE_URL,
    migrations: { directory: __dirname + "/db/migrations" },
    seeds: { directory: __dirname + "/db/seeds" }
  }
};
