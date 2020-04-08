const postDevice = require('./postDevice');
const deleteDevice = require('./deleteDevice');
const updateDevice = require('./updateDevice');
const getDevice = require('./getDevice');
const getAllDevices = require('./device/getDevices');
const isHomeExist = require('../middlewares/isHomeExist');
const postHome = require('./postHome');
const getHome = require('./getHome');
const validationMiddleware = require('../middlewares/validationMiddleware');

module.exports = {
  deleteDevice,
  postDevice,
  getDevice,
  updateDevice,
  getAllDevices,
  isHomeExist,
  postHome,
  getHome,
  validationMiddleware,
};
