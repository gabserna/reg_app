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

client.connect((err) => {
  if (err) {
    clientLogger.logError('Error connecting to PostgreSQL: ' + err.message);
  } else {
    clientLogger.logInfo('Connected to PostgreSQL');
  }
});

module.exports = client;