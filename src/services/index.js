const readFile = require('./readFile');
const writeFile = require('./writeFile');

const addDevice = require('./addDevice');
const getDeviceById = require('./getDeviceById');

const deleteDeviceById = require('./deleteDeviceById');
const updateDeviceById = require('./updateDeviceById');

module.exports = {
  readFile,
  writeFile,
  addDevice,
  getDeviceById,
  deleteDeviceById,
  updateDeviceById
};

