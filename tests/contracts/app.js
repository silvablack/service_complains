const ComplainsModel = require('../../src/model/complainsModel');

describe('Test Contract', () => {
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
    it('should return a list with valid schema', (done) => {
      const expectedSchema = Joi.array().items(Joi.object().keys({
        _id: Joi.string().alphanum(),
        title: Joi.string(),
        description: Joi.string(),
        locale: Joi.object().keys({
          city: Joi.string(),
          state: Joi.string(),
          uf: Joi.string().max(2),
        }),
        company_id: Joi.string().alphanum(),
        date_created: Joi.date().iso(),
        date_updated: Joi.date().iso(),
      }));
      request
        .get('/complains')
        .end((err, res) => {
          Joi.assert(res.body, expectedSchema);
          done(err);
        });
    });
  });

  describe('Route /GET /complains/:id', () => {
    it('should return a complain valid schema', (done) => {
      const expectedSchema = Joi.object().keys({
        _id: Joi.string().alphanum(),
        title: Joi.string(),
        description: Joi.string(),
        locale: Joi.object().keys({
          city: Joi.string(),
          state: Joi.string(),
          uf: Joi.string().max(2),
        }),
        company_id: Joi.string().alphanum(),
        date_created: Joi.date().iso(),
        date_updated: Joi.date().iso(),
      });
      request
        .get(`/complains/${defaultComplains._id}`)
        .end((err, res) => {
          Joi.assert(res.body, expectedSchema);
          done(err);
        });
    });
  });

  describe('Route /POST /complains', () => {
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
    it('should create company and check if a schema is valid', (done) => {
      const expectedSchema = Joi.object().keys({
        _id: Joi.string().alphanum(),
        title: Joi.string(),
        description: Joi.string(),
        locale: Joi.object().keys({
          city: Joi.string(),
          state: Joi.string(),
          uf: Joi.string().max(2),
        }),
        company_id: Joi.string().alphanum(),
        date_created: Joi.date().iso(),
        date_updated: Joi.date().iso(),
      });
      request
        .post('/complains')
        .send(newComplain)
        .end((err, res) => {
          Joi.assert(res.body, expectedSchema);
          done(err);
        });
    });
  });

  describe('Route /PUT /complains:id', () => {
    it('should update complain and check if a schema is valid', (done) => {
      const title = 'Aviso de corte não emitido';
      const expectedSchema = Joi.object().keys({
        _id: Joi.string().alphanum(),
        title: Joi.string(),
        description: Joi.string(),
        locale: Joi.object().keys({
          city: Joi.string(),
          state: Joi.string(),
          uf: Joi.string().max(2),
        }),
        company_id: Joi.string().alphanum(),
        date_created: Joi.date().iso(),
        date_updated: Joi.date().iso(),
      });
      request
        .put(`/complains/${defaultComplains._id}`)
        .send({
          title,
        })
        .end((err, res) => {
          Joi.assert(res.body, expectedSchema);
          done(err);
        });
    });
  });

  describe('Route /DELETE /complains:id', () => {
    it('should delete a complain object', (done) => {
      request
        .delete(`/complains/${defaultComplains._id}`)
        .end((err, res) => {
          expect(res.status).to.be.eql(204);
          done(err);
        });
    });
  });
});
