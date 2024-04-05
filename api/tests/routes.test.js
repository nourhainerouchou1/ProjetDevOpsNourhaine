const request = require('supertest');
const app = require('../app'); 

describe('Routes tests', () => {
  it('GET /contact - should get all contacts', async () => {
    const res = await request(app)
      .get('/contact');
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
  });

});
