const postDevice = require('./postDevice');
const deleteDevice = require('./deleteDevice');
const updateDevice = require('./updateDevice');
const getDevice = require('./getDevice');
const getAllDevices = require('./getDevices');
const isHomeExist = require('./isHomeExist');
const postHome = require('./postHome');
const getHome = require('./getHome');
const validationMiddleware = require('./validationMiddleware');

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
