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

router
  .get('/:id', (req, res) => {
    complainsController.getById(req.params.id)
      .then((response) => {
        res.status(response.statusCode).send(response.data);
      });
  });

router
  .post('/', (req, res) => {
    complainsController.post(req.body)
      .then((response) => {
        res.status(response.statusCode).send(response.data);
      });
  });

router
  .put('/:id', (req, res) => {
    complainsController.put(req.params.id, req.body)
      .then((response) => {
        res.status(response.statusCode).send(response.data);
      });
  });

router
  .delete('/:id', (req, res) => {
    complainsController.delete(req.params.id)
      .then((response) => {
        res.status(response.statusCode).send(response.data);
      });
  });

module.exports = router;
