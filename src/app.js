/**
 * @author Paulo Silva
 * @description Server
 * @returns app with instance of express
 * @version 1.0.0
 */

/**
 * @requires express server
 */
const express = require('express');

/**
 * @constructor express()
 */
const app = express();

/**
 * @requires body parser to Response
 */
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

/**
 * @requires config routes to site index and company
 */
const index = require('./routes/index');
const complainsRoute = require('./routes/complainsRoute');

/**
 * @description Set routes config on server
 */
app.use('/', index);
app.use('/complains', complainsRoute);

module.exports = app;
