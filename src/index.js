// require app, mongoose
var app = require('./server/server.js');
var mongoose = require('mongoose');
require('dotenv').config();
// set mongoURI
var mongoURI = process.env.DBPATH;
// connect db
mongoose.connect(mongoURI);

// set port
var port = process.env.PORT;
// listen on port
app.listen(port);
console.log("Server is listening on port " + port);



// var options = {
//   user: 'legituser',
//   pass: 'legitlegacy'
// };
// mongoose.connect('mongodb://54.173.68.94:27017/legit', options);