const db = require('../../../models/sqlModels');

const getTotalCount = async (Model, condition) => {
  const count = await Model.findAll({
    where: { ...condition },
    attributes: [
      [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'totalcount'],
    ],
  });

  return count[0].dataValues.totalcount;
};

module.exports = getTotalCount;
