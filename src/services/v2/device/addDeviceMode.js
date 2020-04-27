const db = require('../../../models/sqlModels');

const addDeviceMode = mode => {
  const Mode = db.mode;

  return Mode.create(mode);
};

module.exports = addDeviceMode;
