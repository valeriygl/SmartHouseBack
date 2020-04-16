const db = require('../../../models');

const getTotalCount = async (Model, homeid) => {
  const count = await Model.findAll({
    where: { houseId: homeid },
    attributes: [
      [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'totalcount'],
    ],
  });

  return count[0].dataValues.totalcount;
};

module.exports = getTotalCount;
