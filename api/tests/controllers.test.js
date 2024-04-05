const chai = await import('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); 
const { expect } = chai;

chai.use(chaiHttp);

describe('Controllers tests', () => {
  it('should add a new contact', async () => {
    const res = await chai.request(app)
      .post('/contact')
      .send({});
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('object');
  });

});
