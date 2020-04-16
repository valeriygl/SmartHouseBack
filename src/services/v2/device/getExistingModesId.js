const db = require('../../../models');

const Mode = db.mode;
const ModeList = db.modeList;

const { Op } = db.Sequelize;

const getExistingModesId = async modes => {
  const data = await Mode.findAll({
    include: {
      model: ModeList,
      attributes: ['id'],
      where: { name: { [Op.in]: modes } },
    },
  });

  const modesId = data[0].dataValues.mode_lists.map(item => item.id);

  return modesId;
};

module.exports = getExistingModesId;
