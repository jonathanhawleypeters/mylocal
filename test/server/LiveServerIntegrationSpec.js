import { expect } from '../test_helper';
var request = require('request');
require('dotenv').config();
var server = 'http://localhost:' + process.env.PORT;

describe('server', function() {
  it('should respond to GET requests for / with a 200 status code', function(done) {
    request(server, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should send back index.html', function(done) {
    request(server, function(error, response, body) {
      expect(body).to.contain('app');
      done();
    });
  });

  it('Should serve sign up page', function(done) {
    request(server + '/signup', function(error, response, body) {
      expect(body).to.contain('app');
      done();
    });
  });

  it('Should display user profiles', function(done) {
    request(server + '/user/amanthapar@gmail.com', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Should redirect when asked for a nonexistent route', function(done) {
    request('http://127.0.0.1:3000/fdkljfkadkj', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.contain('app');
      done();
    });
  });


});
