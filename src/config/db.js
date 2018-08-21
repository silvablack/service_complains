
/**
 * @author Paulo Silva
 * @description Instance MongoDB with Mongoose, Build and Validate Schema
 * @version 1.0.0
 */

/**
  * @requires mongoose
  */
const mongoose = require('mongoose');

/**
 * @description connect mongo db
 */
mongoose.connect(`mongodb://${process.env.URL_DATA_COMPLAINS}:${process.env.PORT_DATA_COMPLAINS}/db_challenge`, { useNewUrlParser: true });

/**
 * @description Define Complains Doc Schema and Validator
 */
const complainsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  locale: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    uf: {
      type: String,
      required: true,
      maxlength: 2,
    },
  },
  company_id: {
    type: String,
    required: true,
  },
  date_created: { type: Date, default: Date.now() },
  date_updated: { type: Date },
}, { versionKey: false });

/**
 * Set Model Complains on Complains Schema
 */
const Complains = mongoose.model('Complains', complainsSchema);

module.exports = Complains;
