import Knex from "knex";


const knexConfig: Knex.Config = {
    client: "pg",
    connection: {
        host     : '127.0.0.1',
        user     : 'your_database_user',
        password : 'your_database_password',
        database : 'myapp_test',
        charset  : 'utf8'
      },
    // connection: "postgresql://learing_owner:AQKMkdB9hHV3@ep-lively-bird-a5c5c8v4.us-east-2.aws.neon.tech/learing?sslmode=require",
    migrations: {
        directory: "src/migrations"
    }
}

export default knexConfig;