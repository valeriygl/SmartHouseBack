const db = require('../../../models');

const ModeModeList = db.modeModeList;

const { Op } = db.Sequelize;

const deleteOldModes = (modeId, modesId) => {
  return ModeModeList.destroy({
    where: { modeId, modeListId: { [Op.notIn]: modesId } },
  });
};

module.exports = deleteOldModes;
