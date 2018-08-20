const ComplainsController = require('../../../src/controllers/complainsController');

describe('Controller Complains', () => {
  describe('Get all complains', () => {
    it('should return a list of all complains', (done) => {
      const Complains = {
        getAll: td.function(),
      };
      const expectResponse = [{
        _id: '11223344',
        title: 'Corte Ilegal',
        description: 'Lorem ipsum massa lacus justo diam molestie vulputate, luctus dolor fermentum habitant dictum et, taciti dapibus consectetur cras metus curabitur. feugiat ut odio nec nostra enim adipiscing aenean lectus elit, risus rutrum torquent augue posuere mi eu turpis, nisl molestie porta nulla tincidunt consectetur leo varius. sem porta in nisi sociosqu eleifend habitant lectus suscipit ligula nunc, commodo tristique eget dictum iaculis varius dictumst adipiscing semper. imperdiet erat orci inceptos quam sed et platea, gravida eleifend malesuada aenean aliquet molestie vivamus, sem suspendisse suscipit est porttitor fringilla. malesuada hac lacus donec consectetur, mollis congue dolor varius nostra, fringilla sollicitudin velit.',
        locale: {
          city: 'São Luís',
          state: 'Maranhão',
          uf: 'MA',
        },
        company_id: '5b74e44d6906800036631800',
        date_create: Date.now(),
        date_updated: Date.now(),
      }];
      td.when(Complains.getAll()).thenResolve(expectResponse);
      const complainsController = new ComplainsController(Complains);
      complainsController.getAll().then((response) => {
        expect(response.data).to.be.eql(expectResponse);
        done();
      });
    });
  });
});
