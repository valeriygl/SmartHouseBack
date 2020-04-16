const addRange = require('./addRange');
const addItem = require('./addItem');
const getTotalCount = require('./getTotalCount');
const getBaseDevice = require('./getBaseDevice');
const addDeviceMode = require('./addDeviceMode');
const addDeviceModes = require('./addDeviceModes');
const getDeviceRecords = require('./getDevicesRecords');
const parseDeviceRecords = require('./parseDeviceRecords');
const addModeToModeListRelation = require('./addModeToModeListRelation');

module.exports = {
  addRange,
  addItem,
  getBaseDevice,
  addDeviceMode,
  addDeviceModes,
  addModeToModeListRelation,
  getDeviceRecords,
  parseDeviceRecords,
  getTotalCount,
};
