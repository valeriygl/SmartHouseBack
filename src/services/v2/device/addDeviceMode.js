const db = require('../../../models');

const addDeviceMode = mode => {
  const Mode = db.mode;

  return Mode.create(mode);
};

module.exports = addDeviceMode;
