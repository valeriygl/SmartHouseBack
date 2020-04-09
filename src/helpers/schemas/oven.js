const Joi = require('joi');

const oven = Joi.object().keys({
  name: Joi.string().required(),
  status: Joi.boolean().required(),
  type: Joi.string().valid('oven').required(),
  image: Joi.string().allow('').required(),
  temp: Joi.object().keys({
    min: Joi.number().required(),
    max: Joi.number().required(),
    current: Joi.number().required(),
    step: Joi.number().required(),
  }),
  modes: Joi.array().items(Joi.string()).required(),
  currentMode: Joi.string().allow('').required(),
});

module.exports = oven;
