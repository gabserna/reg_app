const client = require("./config/connection.js");
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


// routes
require('./routes/auth.routes.js')(app);
require('./routes/user.routes.js')(app);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

client.connect();

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}




