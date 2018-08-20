/**
 * @author Paulo Silva
 * @description Controller to Complains Service
 * @returns methods <get, getById, post, put, delete>
 * @version 1.0.0
 */


/**
 * @requires Http Status
 */
const HttpStatus = require('http-status');
/**
* @requires Redis Data Cache
*/
const redis = require('redis');

/**
* @description Interfaces to data response
*/
const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class ComplainsController {
  constructor(Complains) {
    this.ComplainsModel = Complains;
  }

  /**
     * @name callback for Request VERBS GET ALL
     * @param {Request} req
     * @param {Response} res
     * @returns Promise ComplainsModel.getAll()
     */
  getAll() {
    return new Promise((resolve, reject) => {
      this.ComplainsModel.getAll()
        .then((complains) => {
          resolve(defaultResponse(complains));
        }).catch(err => reject(errorResponse(err.message)));
    });
  }

  /**
     * @name getAllFromCache
     * @description Return a response with all companies from cache
     * @return Promise ComplainsModel.gellAllFromCache()
     */
  getAllFromCache() {
    return new Promise((resolve, reject) => {
      /**
        * @constructor Redis Client
        */
      const client = redis.createClient(`redis://${process.env.URL_CACHE_COMPLAINS}`);
      client.get('allComplains', (err, reply) => {
        if (reply) {
          resolve(defaultResponse(reply));
        }
      });
      this.ComplainsModel.getAll()
        .then((complains) => {
          client.set('allComplains', JSON.stringify(complains));
          client.expire('allComplains', 20);
          resolve(defaultResponse(complains));
        }).catch(erro => reject(errorResponse(erro.message)));
    });
  }

  /**
     * @name getById
     * @description Send Request to Find Model By ID
     * @method getById
     * @returns Promise ComplainsModel.getById(id)
     */
  getById(id) {
    return new Promise((resolve, reject) => {
      this.ComplainsModel.getById(id)
        .then((complains) => {
          resolve(defaultResponse(complains));
        }).catch(err => reject(errorResponse(err.message)));
    });
  }

  /**
     * @name post
     * @description Send Complain Object to Create Model
     * @method create
     * @returns Promise ComplainsModel.create()
     */
  post(data) {
    return new Promise((resolve, reject) => {
      this.ComplainsModel.create(data)
        .then((complains) => {
          resolve(defaultResponse(complains, HttpStatus.CREATED));
        }).catch(err => reject(errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY)));
    });
  }
}

module.exports = ComplainsController;
