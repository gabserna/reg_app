const client = require("./config/connection.js");
const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const localstorage = require("local-storage");
const fs = require("fs");
const ejs = require("ejs");
const view = require("ejs");
const passport = require("passport");
const localstrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const users = require("./users.json");

const PORT = process.env.PORT || 3001;

const app = express();

const { cli } = require("winston/lib/winston/config/index.js");
const { error } = require("console");

passport.use(
  "login",
    new localstrategy( async (username, password, done) => {
      try {
        client.query(`Select * from users where username = $1`, [username], (err, result) => {
          if (err) {
          throw err;
        }
        if (result.rows.length > 0) {
          const user = result.rows[0];
            if (password === user.password) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password is incorrect" });
            }
        } else {
          return done(null, false, { message: "Username is incorrect" });
        }
        });
      } catch (err) {
        console.log(err);
      }
    }));

passport.use(
  "signup",
    new localstrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          if (password.length <= 4 || !email) {
            done(null, false, {
              message: "Your credentials do not match our criteria..",
            });
          } else {
            const hashedPass = await bcrypt.hash(password, 10);
            let newUser = { email, password: hashedPass, id: uuidv4() };
            users.push(newUser);
            await fs.writeFile("users.json", JSON.stringify(users), (err) => {
              if (err) return done(err); // or throw err?;
                console.log("updated the fake database");
              });
    
              done(null, newUser, { message: "signed up msg" });
            }
          } catch (err) {
            return done(err);
          }
        }
      )
    );

//     passport.use(
//       "register",
//       new localstrategy (
//         { 
//           passReqToCallBack: true,
//           username: "username", 
//           email: "email", 
//           password: "password", 
//           firstname: "firstname", 
//           lastname: "lastname",
//           telephone: "telephone",
//           address: "address" 
//         },
//         async (
//           username, 
//           email, 
//           password,
//           firstname,
//           lastname,
//           telephone,
//           address, 
//           done) => {
//           try {
//             if (password.length <= 4 || !email) {
//               return done(null, false, { message: "Password must be longer than 4 characters and email must be provided" });
//             } else {
//               const hashedPass = await bcrypt.hash(password, 10);
//               const newUser = {
//                 username: username,
//                 email: email,
//                 password: hashedPass,
//                 firstname: firstname,
//                 lastname: lastname,
//                 telephone: telephone,
//                 address: address
//               };
//               try {
//                 client.query(`INSERT INTO users (
//                   username, 
//                   email, 
//                   password, 
//                   firstname, 
//                   lastname, 
//                   telephone, 
//                   address) 
//                   VALUES ($1, $2, $3, $4, $5, $6, $7)`, [
//                     username, 
//                     email, 
//                     hashedPass, 
//                     firstname, 
//                     lastname, 
//                     telephone, 
//                     address], (err, result) => {
//                   if (err) {
//                     throw err;
//                   }
//                 });
//               }
//                catch (err) {
//                 console.log(err);
//               }
//               return done(null, newUser);
//             }
//           } catch (err) {
//             console.log(err);
//           }
//         }
//       )
//     );


    

app.set("views", path.join(__dirname, "views"))  // set views directory for ejs;
app.set("view engine", "ejs"); // set view engine to ejs

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

app.get('/' , (req, res) => {
  res.send('Nothing to see here');
});

app.get('/secureroute', (req, res) => {
  res.send('This is a secure route');
});

app.get('logout', (req, res) => {
  res.send('You have been logged out');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

app.get('/failed', (req, res) => {
  res.send(`You failed to login ${req.query.message}`);
});

app.get('/success', (req, res) => {
  res.send(`You have successfully logged in as ${req.query.message}`);
});

app.post('/login', (req, res) => {
  // Authenticate User
  passport.authenticate('login', async (err, user, info) => {
   
    if (!user){
      res.redirect(`/failed?message=${info.message}`);
    }
      
    if (user){
      res.redirect(`/success?message=${user.username}`);
    }
  })(req, res);
});

app.post("/signup", (req, res, next) => {
  passport.authenticate("signup", async (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect(`failed?message=${info.message}`);
    }

    // req.login(user, { session: false }, async function (err) {
    // if (err) {
    //   return next(err);
    // }

    const body = { _id: user.id, email: user.email };
    const token = jwt.sign({ user: body }, "TOP_SECRET");

    await fs.writeFile(
      "fakeLocal.json",
      JSON.stringify({ Authorization: `Bearer ${token}` }),
      (err) => {
        if (err) throw err;
      }
    );

    return res.redirect(`/success?message=${info.message}`);
    // });
  })(req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

client.connect();










