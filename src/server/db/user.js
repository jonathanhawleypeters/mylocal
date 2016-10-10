// import mongoose for schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//import bcrypt to encrypt passwords
const bcrypt = require('bcrypt-nodejs');

// Define our model
var userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  address: String,
  location: {},
  image: String,
  favorites: [],
  reviews: []
});

// mongoose middleware before saving user, to encrypt password
userSchema.pre('save', function(next) {
  const user = this;
  // generate a salt of work_factor 10
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    //hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// schema methods
userSchema.methods.comparePassword = function(submittedPassword, callback) {
  bcrypt.compare(submittedPassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

// model class
module.exports = mongoose.model('user', userSchema);
