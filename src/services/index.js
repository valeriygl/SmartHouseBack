const readFile = require('./readFile');
const writeFile = require('./writeFile');
const addDevice = require('./addDevice');
const getDeviceById = require('./getDeviceById');
const deleteDeviceById = require('./deleteDeviceById');
const updateDeviceById = require('./updateDeviceById');
const searchBySubname = require('./searchBySubname');
const paginate = require('./paginate');
const filterByType = require('./filterByType');
const addHome = require('./addHome');
const getHomeById = require('./getHomeById');

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
  addHome,
  getHomeById,
};
