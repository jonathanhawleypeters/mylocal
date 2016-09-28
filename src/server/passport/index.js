const passport = require('passport');
const User = require('../db/models/user');
const secret = process.env.SECRET;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy - verify user + email that the user sent is valid
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);
    // compare user password with password on db
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
});

// setup options for JWT Strategy - look in authorization header
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
};
// Create JWT strategy - payload is the id of user
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if user ID in the payload exists in our database
  User.findById(payload.sub, function(err, user) {
    if (err) return done(err, false);
    if (user) {
      done(null, user);
    } else {
      done(null, false); // user was not found
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);