const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const app = express();

// Morgan for HTTP request logging
app.use(morgan('combined'));

// Winston for general application logging
const logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logfile.log' })
  ]
});

app.use(
  morgan('tiny', {
    stream: {
      write: (message) => {
        logger.http(message.trim());
      }
    }
  })
);

app.use(express.urlencoded({ extended: false }));

app.post('/add', (req, res) => {
  let color = req.body.color;
  logger.warn(color);
  logger.info('Hello color');
  res.send('done');
});

app.get('/', (req, res) => {
  // Logging an application-level event with Winston
  logger.info('Home page accessed');
  res.send('Hello Winston and Morgan!');
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
