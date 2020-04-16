const db = require('../../../models');

const ModeModeList = db.modeModeList;

const addModeToModeListRelation = (modeListRecords, modeId, currentMode) => {
  return Promise.all(
    modeListRecords.map(modeListRecord => {
      const { id, name } = modeListRecord[0].dataValues;

      return ModeModeList.create({
        modeId,
        modeListId: id,
        status: name === currentMode,
      });
    })
  );
};

module.exports = addModeToModeListRelation;
