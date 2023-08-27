const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const fs = require('fs');
const users = require('../users.json');
const { v4: uuidv4 } = require("uuid");

module.exports = function (passport) {

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
};

