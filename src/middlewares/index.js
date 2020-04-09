const isHomeExist = require('./isHomeExist');
const validationMiddleware = require('./validationMiddleware');
const getDefaultPagParams = require('../middlewares/getDefaultPagParams');

module.exports = {
  isHomeExist,
  validationMiddleware,
  getDefaultPagParams,
};
