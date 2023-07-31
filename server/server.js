const client = require("./connection.js");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const bodyParser = require("body-parser");
const { cli } = require("winston/lib/winston/config/index.js");

app.use(bodyParser.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Handle GET requests to /api route
app.get("/classes", (req, res) => {
  client.query(`Select * from class_info`, (err, result)=>{
    if(!err){
        res.send(result.rows);
    }
  });
  client.end;
});

app.get("/", (req, res) => {
  res.json({ message: "hello from the server" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

client.connect();


