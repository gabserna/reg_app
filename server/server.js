const client = require("./config/connection.js");
const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const localstorage = require("local-storage");
const fakelocal = require("./fakelocal.json");
const fs = require("fs");



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

app.get('/', (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Handle GET requests to /api route
app.get("/classes", (req, res) => {
  client.query(`Select * from class_info`, (err, result)=>{
    if(!err){
        res.send(result.rows);
    }
  });
  client.end;
});

app.post('/signup', async (req, res)=> {
  const user = req.body;
  const createdat = new Date( Date.now() ).toISOString().slice(0, 19).replace('T', ' ');
  const isadmin = false;
  const token = jwt.sign({user: user}, 'secretkey')

  localstorage.set('token', token);
  console.log(localstorage.get('token'));

  user.hash = token;
  user.createdat = createdat;
  user.isadmin = isadmin;
  let insertQuery = `insert into users(
      username, 
      email, 
      password,
      createdat,
      isadmin,
      firstName,
      lastName,
      telephone,
      address,
      hash) 
    values(
      '${user.username}', 
      '${user.email}', 
      '${user.password}',
      '${user.createdat}',
      '${user.isadmin}',
      '${user.firstName}',
      '${user.lastName}',
      '${user.telephone}',
      '${user.address}',
      '${user.hash}')`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})

app.get('/profile', (req, res)=> {
  const token = localstorage.get('token');

  client.query(`select * from users where hash = '${token}'`, (err, result)=>{
  
    if(!err){
      res.send(result.rows);
    }
    else{ console.log(err.message) }
  })
  client.end;
})



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

client.connect();










