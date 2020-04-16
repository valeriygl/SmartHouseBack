const db = require('../../../models');

const Mode = db.mode;

const getCurrentModeId = async (deviceId, type) => {
  const modeRecord = await Mode.findOne({ where: { type, deviceId } });

  return modeRecord.dataValues.id;
};

module.exports = getCurrentModeId;
