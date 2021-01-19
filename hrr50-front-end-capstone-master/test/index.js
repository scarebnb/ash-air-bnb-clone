// need to test that the server responds to a get request
const mocha = require('mocha');
const request = require('supertest');

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../server/server.js');
  });
  it('responds to / with a valid response', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('sends a 404 for invalid routes', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
  it('responds to /photos with an array of data from the database', function testGet (done) {
    request(server)
    .get('/photos')
    .expect('Content-Type', /json/)
    .expect(200, done);
  })
});

// need to test that the server responds to a get request from the correct URL with information from the server

// need to test that the database can read information

// need to test that the database can write information
