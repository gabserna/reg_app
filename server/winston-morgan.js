const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const app = express();

//morgan for http request logging
app.use(morgan('combined'));
//winston for general application logging
const logger = winston.createLogger({
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logfile.log'})
        ]
});

app.get('/', (req, res) => {
    //logging an application-level event with winston
    logger.info('Home page accessed');
    res.send('Hello Winston and Morgan!');
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});