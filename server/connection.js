const {Client} = require('pg')

const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
})

console.log("proces.env.PGUSER", process.env.PGUSER)

module.exports = client