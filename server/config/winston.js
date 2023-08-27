const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logfile.log'})
        ]
});

const logInfo = (message) => {
  logger.info(message);
};

const logError = (message) => {
  logger.error(message);
};

// this goes to connection.js
module.exports = {
  logInfo,
  logError
};
