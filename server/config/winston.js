//install npm i winston
const winston = require('winston');

//configure logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logfile.log'})
        ]
});

//log messages
logger.log('info', 'This is an informational message.');
logger.log('error', 'An error ocurred.');