/**
 * @author Paulo Silva
 * @description Routes of exposure
 * @returns methods Router<get>
 * @version 1.0.0
 */
/**
  * @requires express.js
  */
const express = require('express');

/**
   * @constructor Express Router
   */
const router = express.Router();


/**
   * @requires Complains Controller
   */
const ComplainsController = require('../controllers/complainsController');
const ComplainsModel = require('../model/complainsModel');

const complainsController = new ComplainsController(ComplainsModel);
/**
    * @description Define router to METHOD HTTP/RESTFul GET/POST/PUT/DELETE
    */
router
  .get('/', (req, res) => {
    complainsController.getAllFromCache()
      .then((response) => {
        res.status(response.statusCode).send(response.data);
      });
  });

module.exports = router;
