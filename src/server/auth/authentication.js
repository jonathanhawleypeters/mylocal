var User = require('../db/models/user');
const jwt = require('jwt-simple');
const secret = process.env.SECRET;

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

exports.signin = function(req, res, next) {
  // user is already authenticated so will send token back
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {

  var email = req.body.email;
  var password = req.body.password;
  if (!email || !password) {
    return res.status(422).send({ error: 'You must submit email and password'});
  }
  User.findOne({email: email}, function(err, existingUser) {
    if (err) { return next(err); }
    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'});
    }
    var user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) { return next(err); }
      res.json({ token: tokenForUser(user)});
    });
  });
};