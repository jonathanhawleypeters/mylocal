module.exports = function(app, express) {

  // morgan for logging
  app.use(require('morgan')('dev'));

  // body parser for post requests and extending the limit for file uploads 
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json({ limit: '5mb' }));

  // serve static files from public folder
  app.use(require('express').static(__dirname + '/../../public'));
};