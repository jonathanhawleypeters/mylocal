// require the db models
var User = require('../db/user');

// For authentication
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

// For yelp search
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: '0KScCgu0-rfXYrnf7vW7Zw',
  consumer_secret: 'O3HV8Ip2lhrDJILG1iXWhZrl6qM',
  token: 'OilND9TNTxEQYt0Klpa8fvxwjyGr2yQ_',
  token_secret: 'TAq9HeKnc_RfL6b70OTNnekZRvE',
});
exports.searchYelp = function(req, res) {
  yelp.search({ term: req.query.term, location: req.query.location })
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
};