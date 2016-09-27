var bodyParser = require('body-parser');

module.exports = function(app, express) {

  // morgan for logging
  app.use(require('morgan')('dev'));

  // body parser for post requests
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // serve static files from public folder
  app.use(require('express').static(__dirname + '/../../public'));
};