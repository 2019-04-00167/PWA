/* This is the file for passport strategy configuration
 * It is used for authentication
 */

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          where: { email: email },
        });
        if (!user) {
          console.log("incorect email");
          // req.flash("success_msg", "Wrong email or password");
          return done(null, false, { message: "Incorrect Email" });
        }
        if (!(await bcrypt.compare(password, user.password))) {
          console.log("incorect password");
          // req.flash("success_msg", "Wrong email or password");
          return done(null, false, { message: "Incorrect Password" });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    var user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});
