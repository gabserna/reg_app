//install npm i morgan
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));  //try 'dev' & 'common'
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.send('Hello there Morgan!');
});
app.post('/addUser', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    res.send(`Hello ${name} ${email}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});