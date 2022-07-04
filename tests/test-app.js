const chai = require('chai');

const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../index.js');

describe('GET /', () => {
  it('should respond with hello world', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
      // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('text/plain');
        done();
      });
  });
});



describe('GET /version', () => {
  it('Response with availability and Semantic Version', (done) => {
    chai.request(app)
      .get('/version')
      .end((err, res) => {
        
        should.not.exist(err);
        res.status.should.equal(200);
        res.text.should.equal('1.0.0');

        done();
      });
  });
});


