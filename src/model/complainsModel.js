/**
 * @author Paulo Silva
 * @description Model to Complains Service
 * @returns methods <getAll, getById, create, update, delete>
 * @version 1.0.0
 */
'use strict';

 /**
  * @requires Complains config/db
  */
var Complains = require('../config/db');

 /**
  * @description Export class and method to ComplainsModel
  * @return class ComplainsModel
  */
module.exports = new class ComplainsModel{
    /**
     * @returns Company.find()
     */
    getAll(){
        return Complains.find();
    }

      /**
     *
     * @param {_id: String, name: String, mail: String<validate|mail>, cnpj: String}
     * @returns Complains.create()
     */
        create(complains) {
            return Complains.create(complains);
        }

    deleteAll(){
        return Complains.deleteMany({});
    }
};
