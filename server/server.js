const express = require("express");
const cors = require('cors');
const { auth } = require('express-openid-connect');

const client = require("./config/connection");
const path = require("path");
const jwt = require("jsonwebtoken");
const localstorage = require("local-storage");
const fs = require("fs");
const ejs = require("ejs");
const view = require("ejs");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const users = require("./users.json");
const secureRoutes = require("./routes/secureRoutes.js");
const JWTstrategy = require("passport-jwt").Strategy;
const fakeLocal = require("./utils/fakeLocal.json")
require("dotenv").config();
const register = require("./routes/register-routes");

const PORT = process.env.PORT || 3001;
const app = express();

const { cli } = require("winston/lib/winston/config/index.js");
const { error } = require("console");

//use CORS
app.use(cors());
app.use('/', require('./routes/routes.js'));
app.use("/register", register);
app.use(passport.initialize());

function getJwt() {
  // Try accessing a secure route with an INVALID token, and then try with NO TOKEN. You'll get two different errors.
  // Both of those situations will be blocked by this function, and the app won't even make it to the function in JWTStrategy.
  console.log("in getJwt");
  return localstorage.get("token");
}

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: getJwt,
    },
    async (token, done) => {
      console.log("in jwt strat. token: ", token);

      // 0. Don't even make it through the getJwt function check. NO token
      // prints unauthorized.

      // 0B. Invalid token: again doesn't make it into this function. Prints unauthorized

      // 1. Makes it into this function but gets App error (displays error message.) no redirecting.
      // We simulate an "application error" occurring in this function with an email of "tokenerror".
      //
      if (token?.user?.email == "tokenerror") {
        let testError = new Error(
          "something bad happened. we've simulated an application error in the JWTstrategy callback for users with an email of 'tokenerror'."
        );
        return done(testError, false);
      }

      if (token?.user?.email == "emptytoken") {
        // 2. Some other reason for user to not exist. pass false as user:
        // displays "unauthorized". Doesn't allow the app to hit the next function in the chain.
        // We are simulating an empty user / no user coming from the JWT.
        return done(null, false); // unauthorized
      }

      // 3. Successfully decoded and validated user:
      // (adds the req.user, req.login, etc... properties to req. Then calls the next function in the chain.)
      return done(null, token.user);
    }
  )
);

passport.use(
  "signup",
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          if (password.length <= 4 || !email) {
            done(null, false, {
              message: "Your credentials do not match our criteria..",
            });
          } else {
            const hashedPass = await bcrypt.hash(password, 10);
            const timeStamps = new Date();
            let newUser = { email, password: hashedPass, id: uuidv4(), createdat: timeStamps };
            users.push(newUser);
            await fs.writeFile("users.json", JSON.stringify(users), (err) => {
              if (err) return done(err); // or throw err?;
                console.log("updated the fake database");
              });
    
              done(null, newUser, { message: "You are now signed up" });
            }
          } catch (err) {
            return done(err);
          }
        }
      )
    );

passport.use(
  "login",
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      console.log("login named.");
      // done(null, userObject, { message: "Optional success/fail message"});
      // done(err) // Application Error
      // done(null, false, {message: "Unauthorized login credentials!"}) // User input error when 2nd param is false

      try {
        if (email === "apperror") {
          throw new Error(
            "Oh no! The application crashed! We have reported the issue. You can change next(error) to next(error.message) to hide the stack trace"
          );
        }
        const user = users.find((user) => user.email === email);

        if (!user) {
          return done(null, false, { message: "User not found!" });
        }

        const passwordMatches = await bcrypt.compare(password, user.password);

        if (!passwordMatches) {
          return done(null, false, { message: "Invalid credentials" });
        }

        return done(null, user, { message: "Hey congrats you are logged in!" });
      } catch (error) {
        return done(error); // application error!
      }
    }
  )
);




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

// *********************************************************
app.get("/test", (req, res) => {
  res.json({ message: "Hello from Server GS!!!"});
});

// app.use(passport);
// app.use(logEvent);
// app.use(sanitize);
// app.use(helmet());
// app.use('/', AuthRoutes);
// app.use('/', auth, UserRoutes);
// app.use('/', auth, CourseRoutes);
// app.use('/', auth, verifyAdmin, AdminRoutes);

// All GET request not handled with above middleware will return our React app
// This will avoid Cannot GET /foo message if a user manually enters a client-side ....
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, clientBuildPath, 'index.html'));
// });
// *********************************************************

app.get("/", (req, res) => {
  console.log("----- begin of / route ----");
  //I could be wrong, but I think routes without passing through the JWT strategy will automatically not have the user object, and req.isAuthenticated will be false.
  // So far, whether I login with req.login() or if I don't use req.login, the req.user always appears to be false, and req.isAuthenticated() appears to be false in the "/" route.
  console.log("req.user: ", req.user);
  console.log("req.isAuthenticated: ", req.isAuthenticated());
  res.send("get index route. /");
});

app.get(
  "/secureroute",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // 1. Try visiting this route WITHOUT logging in. The authenticate("jwt") line will prevent you from ever getting here.
    //// You should get "unauthorized". In this case use a front end to route appropriately.
    // 2. Try visiting this route with an invalid jwt. So... login, manually alter the jwt, then visit secure route.
    //// you should get "unauthorized" here too. You would use the front end to route in this case.

    // 3. Try visiting this route when logged in with a working user.
    // req.user, req.isAuthenticated, login and logout should all work.

    console.log("------ beginning of /secureroute -----");
    console.log("req.isAuthenticated: ", req.isAuthenticated());
    console.log("req.user: ", req.user); // does this for me.
    console.log("req.login: ", req.login);
    console.log("req.logout: ", req.logout);
    res.send(`welcome to the top secret place ${req.user.email}`);
  }
);

app.get("/logout", async (req, res) => {
  await fs.writeFile(
    "fakeLocal.json",
    JSON.stringify({ Authorization: `` }),
    (err) => {
      if (err) throw err;
    }
  );

  res.redirect("/login");
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get("/failed", (req, res) => {
  console.log(`failed! ${req.query?.message}`);

  res.send("FAILED");
});

app.get("/success", (req, res) => {
  console.log("req.query: ", req.query);
  console.log("req.isAuthenticated: ", req.isAuthenticated());

  res.send(`You're in! ${req.query.message}`);
});

app.post(
  "/login",
  function (req, res, next) {
    passport.authenticate("login", async (err, user, info) => {
      console.log("err: ", err);
      console.log("user: ", user);
      console.log("info: ", info);

      if (err) {
        return next(err);
      }

      if (!user) {
        return res.redirect(`/failed?message=${info.message}`);
      }

      const body = { _id: user.id, email: user.email };

      const token = jwt.sign({ user: body }, process.env.SECRET_KEY);

      localstorage.set("token", token);
      console.log("token: ", token);


      return res.redirect(`success?message=${info.message}`);
      // }); // this is the closing brackets for the req.login
    })(req, res, next);
  },
  (req, res, next) => {
    res.send("Hello"); // able to add functions after the authenticate call now.
  }
);


app.post("/signup", (req, res, next) => {
  passport.authenticate("signup", async (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect(`failed?message=${info.message}`);
    }


    const body = { _id: user.id, email: user.email };
    const token = jwt.sign({ user: body }, process.env.SECRET_KEY);

    localstorage.set("token", token);


    return res.redirect(`/success?message=${info.message}`);
    // });
  })(req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  client.connect();
});