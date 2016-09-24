//set up local environment
require('dotenv').config();
var port = process.env.PORT;
var mongoURI = process.env.DBPATH;

// set up express
var app = require('./server/server.js');

// set up  and start db
var mongoose = require('mongoose');
mongoose.connect(mongoURI);

// start express server
app.listen(port);
console.log("Server is listening on port " + port);