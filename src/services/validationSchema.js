const Joi = require('joi');

const validationSchema = {
  homePOST: Joi.object().keys({
    name: Joi.string().required(),
    devices: Joi.array().max(0).required(),
  }),
  homePUT: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = validationSchema;
