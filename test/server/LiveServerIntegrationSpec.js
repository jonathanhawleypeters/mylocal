import { expect } from '../test_helper';
var request = require('request');
require('dotenv').config();
var server = 'http://localhost:' + process.env.PORT;
var User = '../../server/db/user';

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

  // The following tests will create users in live db, hence commented out for reference

  // ****
  // it('should accept POST requests to /signup', function(done) {
  //     var requestParams = {method: 'POST',
  //       uri: server + '/signup',
  //       json: {
  //         email: 'Jono333@jono.com',
  //         password: '123'}
  //     };
  //     request(requestParams, function(error, response, body) {
  //       expect(response.statusCode).to.equal(200);
  //       done();
  //     });
  //   });

  //   it('find user in db', function(done) {
  //     var requestParams = {method: 'POST',
  //       uri: server + '/signup',
  //       json: {
  //         email: 'aman333@aman.com',
  //         password: '123'}
  //     };
  //     request(requestParams, function(error, response, body) {
  //       expect(response.statusCode).to.equal(200);
  //       expect(function() {
  //         User.findOne({'email': 'aman333@aman.com'})
  //             .exec(function(err, user) {
  //               expect(user.email).to.equal('aman333@aman.com');
  //             });
  //       });
  //       done();
  //     });
  //   });

  //   it('add a Task', function(done) {
  //     var requestParams = {
  //       method: 'POST',
  //       uri: server + '/api/addTask',
  //       json: {
  //         title: 'cleaner',
  //         description: 'clean house!',
  //         location: {
  //           geometry: {
  //             location: {
  //               lng: 10,
  //               lat: -84
  //             }
  //           }
  //         }
  //       },
  //       headers: {
  //         'authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1N2ZlNzhlYzE4ZjhlNDBjYTJmNjA2YjUiLCJpYXQiOjE0NzYyOTQ4OTMzMDF9.7DElEuf7fy_jjjUiGJ11RYO37j2eyHENsAUV0o_PvuU'
  //       }
  //     };

  //     request(requestParams, function(error, response, body) {
  //       // Now if we request the log, that message we posted should be there:
  //       request({uri: server+'/api/getTasks', method:'GET'}, function(error, response, body) {
  //         console.log(JSON.parse(response.body))
  //         var tasks = body
  //         expect(tasks.title).to.equal('cleaner');
  //         expect(tasks.description).to.equal('clean house!');
  //         done();
  //       });
  //     });
  //});

