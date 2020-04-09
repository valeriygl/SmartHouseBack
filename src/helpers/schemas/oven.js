const Joi = require('joi');

const oven = Joi.object().keys({
  name: Joi.string().required(),
  status: Joi.boolean(),
  type: Joi.string().valid('oven'),
  image: Joi.string(),
  temp: Joi.object().keys({
    min: Joi.number().min(0),
    max: Joi.number().min(0),
    current: Joi.number().min(0),
    step: Joi.number().min(0),
  }),
  modes: Joi.array().items(Joi.string()),
  currentMode: Joi.string(),
});

module.exports = oven;
