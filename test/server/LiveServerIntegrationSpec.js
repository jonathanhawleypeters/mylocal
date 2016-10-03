import { expect } from '../test_helper';
var request = require('request');

describe('server', function() {
  it('should respond to GET requests for / with a 200 status code', function(done) {
    request('http://52.209.209.216:3000/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should send back index.html', function(done) {
    request('http://52.209.209.216:3000/', function(error, response, body) {
      expect(body).to.contain('app');
      done();
    });
  });

  it('Should contain "Where do you want to find"', function(done) {
    request('http://52.209.209.216:3000/search', function(error, response, body) {
      expect(body).to.contain('app');
      done();
    });
  });

  it('Should serve sign up page', function(done) {
    request('http://52.209.209.216:3000/signup', function(error, response, body) {
      expect(body).to.contain('Sign up');
      done();
    });
  });

  it('should accept POST requests to /signup', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://52.209.209.216:3000/signup',
      json: {
        email: 'Jono3@jono.com',
        password: 'Do my bidding!'}
    };

    request(requestParams, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should respond with messages that were previously posted', function(done) {
    var requestParams = {method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/messages',
      json: {
        username: 'Jono',
        message: 'Do my bidding!'}
    };

    request(requestParams, function(error, response, body) {
      // Now if we request the log, that message we posted should be there:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
          var messages = JSON.parse(body).results;
          expect(messages[0].username).to.equal('Jono');
          expect(messages[0].message).to.equal('Do my bidding!');
          done();
        });
    });
  });

  it('Should 404 when asked for a nonexistent file', function(done) {
    request('http://127.0.0.1:3000/arglebargle', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });


});
