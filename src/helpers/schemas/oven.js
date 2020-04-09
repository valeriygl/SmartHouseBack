const Joi = require('joi');

const oven = Joi.object().keys({
  name: Joi.string().required(),
  status: Joi.boolean().required(),
  type: Joi.string().valid('oven').required(),
  image: Joi.string().required(),
  temp: Joi.object()
    .keys({
      min: Joi.number().min(0).required(),
      max: Joi.number().min(0).required(),
      current: Joi.number().min(0).required(),
      step: Joi.number().min(0).required(),
    })
    .required(),
  modes: Joi.array().items(Joi.string()).required(),
  currentMode: Joi.string().required(),
});

module.exports = oven;
