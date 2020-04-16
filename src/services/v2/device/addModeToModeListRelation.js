const db = require('../../../models');

const addModeToModeListRelation = (modeListRecords, modeId, currentMode) => {
  const ModeModeList = db.modeModeList;

  return Promise.all(
    modeListRecords.map(modeListRecord => {
      const { id, name } = modeListRecord[0].dataValues;

      return ModeModeList.findOrCreate({
        where: {
          modeId,
          modeListId: id,
          status: name === currentMode,
        },
      });
    })
  );
};

module.exports = addModeToModeListRelation;
