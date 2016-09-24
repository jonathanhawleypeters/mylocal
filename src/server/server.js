// start express app
var express = require('express')
  , app = express();

// start express middleware
require('./middleware')(app, express);

// start express routes
app.use(require('./controllers'));

module.exports = app;