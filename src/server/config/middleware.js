var morgan = require('morgan');

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(require('body-parser').urlencoded({extended: false}));
  app.use(express.static(__dirname + '/../../public'));
};