//start the express router
var router = require('express').Router();

// start passport
var passport = require('passport');
var passportService = require('../passport');
  // setting passport middleware - used to secure any route
var requireAuth = passport.authenticate('jwt', { session: false });
  // setting passport middleware - used for signin
const requireSignin = passport.authenticate('local', { session: false });

// require the route handlers
var handler = require('../controllers');

// signup route
router.post('/signup', handler.signup);

// signin route
router.post('/signin', requireSignin, handler.signin);

// call from client for yelp search
router.get('/search/restaurants', handler.searchYelp);

// example: protected route
router.get('/secured', requireAuth, function(req, res) {
  res.send({ success: true });
});

//catchall
router.get('/*', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../../public/' });
});

module.exports = router;