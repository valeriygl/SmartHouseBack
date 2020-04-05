const readFile = require('./readFile');
const writeFile = require('./writeFile');
const addDevice = require('./addDevice');
const getDeviceById = require('./getDeviceById');
const deleteDeviceById = require('./deleteDeviceById');
const updateDeviceById = require('./updateDeviceById');
const searchBySubname = require('./searchBySubname');
const paginate = require('./paginate');
const filterByType = require('./filterByType');

module.exports = {
  readFile,
  writeFile,
  addDevice,
  getDeviceById,
  deleteDeviceById,
  updateDeviceById,
  searchBySubname,
  paginate,
  filterByType,
};
