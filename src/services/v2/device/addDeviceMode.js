const db = require('../../../models');

const Mode = db.mode;

const addDeviceMode = mode => {
  return Mode.create(mode);
};

module.exports = addDeviceMode;
