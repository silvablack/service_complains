const ComplainsModel = require('../../src/model/complainsModel');

describe('Test Integration', () => {
  const defaultComplains = {
    _id: '5b74e44d6906800036631900',
    title: 'Corte Ilegal',
    description: 'Lorem ipsum massa lacus justo diam molestie vulputate, luctus dolor fermentum habitant dictum et, taciti dapibus consectetur cras metus curabitur. feugiat ut odio nec nostra enim adipiscing aenean lectus elit, risus rutrum torquent augue posuere mi eu turpis, nisl molestie porta nulla tincidunt consectetur leo varius. sem porta in nisi sociosqu eleifend habitant lectus suscipit ligula nunc, commodo tristique eget dictum iaculis varius dictumst adipiscing semper. imperdiet erat orci inceptos quam sed et platea, gravida eleifend malesuada aenean aliquet molestie vivamus, sem suspendisse suscipit est porttitor fringilla. malesuada hac lacus donec consectetur, mollis congue dolor varius nostra, fringilla sollicitudin velit.',
    locale: {
      city: 'São Luís',
      state: 'Maranhão',
      uf: 'MA',
    },
    company_id: '5b74e44d6906800036631800',
    date_created: Date.now(),
    date_updated: Date.now(),
  };

  beforeEach((done) => {
    ComplainsModel.deleteAll().then(() => {
      ComplainsModel.create(defaultComplains).then(() => {
        done();
      });
    });
  });

  describe('Route /GET /complains', () => {
    it('should return all complains', (done) => {
      request
        .get('/complains')
        .end((err, res) => {
          expect(res.body[0]._id).to.be.eql(defaultComplains._id);
          expect(res.body[0].title).to.be.eql(defaultComplains.title);
          expect(res.body[0].description).to.be.eql(defaultComplains.description);
          expect(res.body[0].locale.city).to.be.eql(defaultComplains.locale.city);
          expect(res.status).to.be.eql(200);
          done(err);
        });
    });
  });
});
