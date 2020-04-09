const Joi = require('joi');

const oven = require('./oven');
const query = require('./query');
const robotHoover = require('./robotHoover');

const validationSchema = {
  homePOST: Joi.object().keys({
    name: Joi.string().required(),
    devices: Joi.array().max(0).required(),
  }),
  homePUT: Joi.object().keys({
    name: Joi.string().required(),
  }),
  device: Joi.alternatives(oven, robotHoover),
  query,
};

module.exports = validationSchema;
