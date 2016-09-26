//start the express router
var router = require('express').Router();

//define the routes
router.get('/test', function(req, res) {
  res.send("Hello World");
});

module.exports = router;