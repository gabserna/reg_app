const client = require("./connection.js");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const { cli } = require("winston/lib/winston/config/index.js");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Handle GET requests to /api route
app.get("/classes", (req, res) => {
  client.query(`Select * from class_info`, (err, result)=>{
    if(!err){
        res.send(result.rows);
    }
  });
  client.end;
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

client.connect();


