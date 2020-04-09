const Joi = require('joi');

const robotHoover = Joi.object().keys({
  name: Joi.string().required(),
  status: Joi.boolean(),
  type: Joi.string().valid('robot-hoover'),
  image: Joi.string(),
  modes: Joi.array().items(Joi.string()),
  currentMode: Joi.string(),
});

module.exports = robotHoover;
