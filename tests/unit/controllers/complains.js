const ComplainsController = require('../../../src/controllers/complainsController');

describe('Controller Complains', () => {
  describe('Get all complains', () => {
    it('should return a list of all complains', (done) => {
      const Complains = {
        getAll: td.function(),
      };
      const expectResponse = [{
        _id: '5b74e44d6906800036631900',
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
  describe('Get complains by _id', () => {
    it('should return a company', (done) => {
      const Complains = {
        getById: td.function(),
      };
      const expectResponse = {
        _id: '5b74e44d6906800036631900',
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
      };
      td.when(Complains.getById(expectResponse._id)).thenResolve(expectResponse);
      const complainsController = new ComplainsController(Complains);
      complainsController.getById(expectResponse._id).then((response) => {
        expect(response.data).to.be.eql(expectResponse);
        done();
      });
    });
  });
  describe('Create Complain', () => {
    it('should create a company', (done) => {
      const Complains = {
        create: td.function(),
      };
      const newComplain = [{
        _id: '5b74e44d6906800036631900',
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
      const expectResponse = [{
        _id: '5b74e44d6906800036631900',
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
      td.when(Complains.create(newComplain)).thenResolve(expectResponse);
      const complainsController = new ComplainsController(Complains);
      complainsController.post(newComplain).then((response) => {
        expect(response.data).to.be.eql(expectResponse);
        done();
      });
    });
  });
  describe('Update Complain', () => {
    it('should update a complain', (done) => {
      const Complains = {
        update: td.function(),
      };
      const updateComplain = [{
        title: 'Corte Ilegal',
        description: 'Luctus dolor fermentum habitant dictum et, taciti dapibus consectetur cras metus curabitur. feugiat ut odio nec nostra enim adipiscing aenean lectus elit, risus rutrum torquent augue posuere mi eu turpis, nisl molestie porta nulla tincidunt consectetur leo varius. sem porta in nisi sociosqu eleifend habitant lectus suscipit ligula nunc, commodo tristique eget dictum iaculis varius dictumst adipiscing semper. imperdiet erat orci inceptos quam sed et platea, gravida eleifend malesuada aenean aliquet molestie vivamus, sem suspendisse suscipit est porttitor fringilla. malesuada hac lacus donec consectetur, mollis congue dolor varius nostra, fringilla sollicitudin velit.',
        locale: {
          city: 'São Luís',
          state: 'Maranhão',
          uf: 'MA',
        },
        date_create: Date.now(),
      }];
      const expectResponse = [{
        _id: '5b74e44d6906800036631900',
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
      td.when(Complains.update(updateComplain.id, updateComplain)).thenResolve(expectResponse);
      const complainsController = new ComplainsController(Complains);
      complainsController.put(updateComplain.id, updateComplain).then((response) => {
        expect(response.data).to.be.eql(expectResponse);
        done();
      });
    });
  });
});
