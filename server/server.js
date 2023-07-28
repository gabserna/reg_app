<<<<<<< HEAD
const express = require("express");
const path = require("path");

=======
const client = require("./connection.js");
const express = require("express");
const path = require("path");


>>>>>>> b76da8805bcfef76c4832314d58a9cd9ec271c73
const PORT = process.env.PORT || 3001;

const app = express();

<<<<<<< HEAD
=======
const bodyParser = require("body-parser");
const { cli } = require("winston/lib/winston/config/index.js");
app.use(bodyParser.json());

>>>>>>> b76da8805bcfef76c4832314d58a9cd9ec271c73
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
<<<<<<< HEAD
  res.json({ message: "Hello from server!" });
=======
  client.query(`Select * from class_info`, (err, result)=>{
    if(!err){
        res.send(result.rows);
    }
  });
  client.end;
>>>>>>> b76da8805bcfef76c4832314d58a9cd9ec271c73
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
<<<<<<< HEAD
});
=======
});

client.connect();


>>>>>>> b76da8805bcfef76c4832314d58a9cd9ec271c73
