const db = require('../../../models');

const deleteOldModes = (modeId, modesId) => {
  const ModeModeList = db.modeModeList;

  const { Op } = db.Sequelize;

  return ModeModeList.destroy({
    where: { modeId, modeListId: { [Op.notIn]: modesId } },
  });
};

module.exports = deleteOldModes;
