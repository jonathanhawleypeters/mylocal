var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function(app, express) {

  // morgan for logging
  app.use(require('morgan')('dev'));

  // body parser for post requests
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cors());

  // serve static files from public folder
  app.use(require('express').static(__dirname + '/../../public'));
};