// start express app
var app = require('express')();

// start express middleware
require('./middleware')(app);

// start express routes
app.use(require('./controllers'));

module.exports = app;