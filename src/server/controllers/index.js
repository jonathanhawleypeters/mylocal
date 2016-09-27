var Auth = require('../auth/authentication');
var passportService = require('../auth/passport');
var passport = require('passport');

// setting passport middleware helper - can be used to secure any route
var requireAuth = passport.authenticate('jwt', { session: false} );
// passpor middleware for signin
const requireSignin = passport.authenticate('local', {session: false });

//start the express router
var router = require('express').Router();

//define the routes
router.get('/test', function(req, res) {
  res.send( 'Hello World' );
});

// has protected route
router.get('/secured', requireAuth, function(req, res) {
  res.send({ success: true });
});

// signin route
router.post('/signin', requireSignin, Auth.signin);

// signup route
router.post('/signup', Auth.signup);

//
module.exports = router;