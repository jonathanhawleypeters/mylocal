var User = require('../db/models/user');
const jwt = require('jwt-simple');
const secret = process.env.SECRET;

// helper function to encode the token given the user obj 
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

// Returns a token, if it gets here then already authenticated by passport middleware
exports.signin = function(req, res) {
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var address = req.body.address;
  if (!email || !password) {
    return res.status(422).send({ error: 'You must submit email and password'});
  }
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) return next(err);
    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'});
    }
    var user = new User({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      address: address
    });
    user.save(function(err) {
      if (err) return next(err);
      res.json({ token: tokenForUser(user)});
    });
  });
};