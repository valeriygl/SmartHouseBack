const Joi = require('joi');

const robotHoover = Joi.object().keys({
  name: Joi.string().required(),
  status: Joi.boolean().required(),
  type: Joi.string().valid('robot-hoover').required(),
  image: Joi.string().allow('').required(),
  modes: Joi.array().items(Joi.string()).required(),
  currentMode: Joi.string().allow('').required(),
});

module.exports = robotHoover;
