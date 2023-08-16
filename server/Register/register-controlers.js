
const express = require("express");
const router = express.Router();
const localstorage = require("local-storage");
const jwt = require("jsonwebtoken");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const fs = require("fs");
const users = require("../users.json");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");

router.use(passport.initialize());


const renderSignup = (req, res) => {
    res.render("signup");
}

const register = (req, res, next) => {
  passport.authenticate( "signup" , async (err, user, info) => {
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
    const token = jwt.sign({ user: body }, process.env.SECRET_KEY);
    
    localstorage.set("token", token);
    
        // await fs.writeFile(
        //   "fakeLocal.json",
        //   JSON.stringify({ Authorization: `Bearer ${token}` }),
        //   (err) => {
        //     if (err) throw err;
        //   }
        // );
    
    return res.redirect(`/success?message=${info.message}`);
        // });
  })(req, res, next);
};

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
));


module.exports = {
    register,
    renderSignup,
};


