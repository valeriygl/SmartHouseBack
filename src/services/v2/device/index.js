const addRange = require('./addRange');
const addDevice = require('./addDevice');
const getBaseDevice = require('./getBaseDevice');
const addDeviceMode = require('./addDeviceMode');
const addDeviceModes = require('./addDeviceModes');
const deleteOldModes = require('./deleteOldModes');
const updateRangeById = require('./updateRangeById');
const getCurrentModeId = require('./getCurrentModeId');
const deleteDeviceById = require('./deleteDeviceById');
const updateDeviceById = require('./updateDeviceById');
const getExistingModesId = require('./getExistingModesId');
const addModeToModeListRelation = require('./addModeToModeListRelation');

module.exports = {
  addRange,
  addDevice,
  getBaseDevice,
  addDeviceMode,
  addDeviceModes,
  deleteOldModes,
  updateRangeById,
  getCurrentModeId,
  deleteDeviceById,
  updateDeviceById,
  getExistingModesId,
  addModeToModeListRelation,
};
