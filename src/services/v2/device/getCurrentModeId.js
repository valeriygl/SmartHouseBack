const db = require('../../../models/sqlModels');

const getCurrentModeId = async (deviceId, type) => {
  const Mode = db.mode;

  const modeRecord = await Mode.findOne({ where: { type, deviceId } });

  return modeRecord.dataValues.id;
};

module.exports = getCurrentModeId;
