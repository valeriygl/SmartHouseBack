const Joi = require('joi');

const query = Joi.object().keys({
  page: Joi.number().min(1),
  perPage: Joi.number().min(1),
  type: Joi.string(),
  subname: Joi.string(),
});

module.exports = query;
