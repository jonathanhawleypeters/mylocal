var express = require('express');
var app = express();

var middleware = require('./config/middleware');
middleware(app, express);

module.exports = app;