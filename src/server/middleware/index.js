module.exports = function(app, express) {
  
  // morgan for logging
  app.use(require('morgan')('dev'));

  // body parser for post requests
  app.use(require('body-parser').urlencoded({extended: false}));
  
  // serve static files from public folder
  app.use(express.static(__dirname + '/../../public'));
};