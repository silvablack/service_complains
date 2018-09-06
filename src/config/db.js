
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
mongoose.connect(`mongodb://${process.env.URI_DATA_COMPLAINS}`, { useNewUrlParser: true });

/**
 * @description Define Complains Doc Schema and Validator
 */
const complainsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 500,
  },
  locale: {
    city: {
      type: String,
      required: true,
      minlength: 4,
    },
    state: {
      type: String,
      required: true,
      minlength: 4,
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
