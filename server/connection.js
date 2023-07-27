const {Client} = require('pg');
require("dotenv").config();


const client = new Client({
    host: process.env.PGHOST,
    user: 'postgres',
    port: process.env.PGPORT,
    password: 'postgres',
    database: process.env.PGDATABASE
})

console.log("proces.env.PGUSER", process.env.PGUSER)

module.exports = client