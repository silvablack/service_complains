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
    date_created: '2018-08-20T21:33:22.394Z',
    date_updated: '2018-08-20T21:33:22.394Z',
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

  describe('Route /GET /complains/:id', () => {
    it('should return a complains', (done) => {
      request
        .get(`/complains/${defaultComplains._id}`)
        .end((err, res) => {
          expect(res.body._id).to.be.eql(defaultComplains._id);
          expect(res.body.title).to.be.eql(defaultComplains.title);
          expect(res.body.description).to.be.eql(defaultComplains.description);
          expect(res.body.locale.city).to.be.eql(defaultComplains.locale.city);
          expect(res.status).to.be.eql(200);
          done(err);
        });
    });
  });

  describe('Route /POST /complains/', () => {
    const newComplain = {
      _id: '5b74e44d6906800036631901',
      title: 'Corte Ilegal',
      description: 'Lorem ipsum massa lacus justo diam molestie vulputate, luctus dolor fermentum habitant dictum et, taciti dapibus consectetur cras metus curabitur. feugiat ut odio nec nostra enim adipiscing aenean lectus elit, risus rutrum torquent augue posuere mi eu turpis, nisl molestie porta nulla tincidunt consectetur leo varius. sem porta in nisi sociosqu eleifend habitant lectus suscipit ligula nunc, commodo tristique eget dictum iaculis varius dictumst adipiscing semper. imperdiet erat orci inceptos quam sed et platea, gravida eleifend malesuada aenean aliquet molestie vivamus, sem suspendisse suscipit est porttitor fringilla. malesuada hac lacus donec consectetur, mollis congue dolor varius nostra, fringilla sollicitudin velit.',
      locale: {
        city: 'São Luís',
        state: 'Maranhão',
        uf: 'MA',
      },
      company_id: '5b74e44d6906800036631800',
      date_created: '2018-08-20T21:33:22.394Z',
      date_updated: '2018-08-20T21:33:22.394Z',
    };
    it('should create a complain', (done) => {
      request
        .post('/complains')
        .send(newComplain)
        .end((err, res) => {
          expect(res.body._id).to.be.eql(newComplain._id);
          expect(res.body.title).to.be.eql(newComplain.title);
          expect(res.body.description).to.be.eql(newComplain.description);
          expect(res.body.locale.city).to.be.eql(newComplain.locale.city);
          expect(res.body.date_created).to.be.eql(newComplain.date_created);
          expect(res.body.company_id).to.be.eql(newComplain.company_id);
          expect(res.status).to.be.eql(201);
          done(err);
        });
    });
  });

  describe('Route /PUT /complains:id', () => {
    it('should update complaim object', (done) => {
      const data = {
        locale: {
          city: 'São Vicente Ferrer',
        },
      };
      request
        .put(`/complains/${defaultComplains._id}`)
        .send(data)
        .end((err, res) => {
          expect(res.body._id).to.be.eql(defaultComplains._id);
          expect(res.body.locale.city).to.be.eql(data.locale.city);
          expect(res.status).to.be.eql(200);
          done(err);
        });
    });
  });
});
