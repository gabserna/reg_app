const { Client } = require('pg');
const clientLogger = require('./winston');

require("dotenv").config();

const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

// this comes from winston.js
// try connection and manage errors
client.connect()
  .then(() => {
    clientLogger.logInfo('Connected to PostgreSQL');
  })
  .catch((error) => {
    clientLogger.logError('Error connecting DB: ' + error.message);
  });

module.exports = client;
