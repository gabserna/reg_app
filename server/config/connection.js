const {Client} = require('pg');
require("dotenv").config();


const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    // ssl: true,
    // dialect: "postgres"
});

module.exports = client