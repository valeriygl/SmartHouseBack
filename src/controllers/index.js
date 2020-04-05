const postDevice = require('./postDevice');
const deleteDevice = require('./deleteDevice');
const updateDevice = require('./updateDevice');
const getDevice = require('./getDevice');
const getAllDevices = require('./getAllDevices');

module.exports = {
  deleteDevice,
  postDevice,
  getDevice,
  updateDevice,
  getAllDevices,
};
