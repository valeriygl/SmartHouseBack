const db = require('../../../models');
const services = require('../../../services/v2/device');

const getDevices = async (req, res, next) => {
  try {
    const Op = db.Sequelize.Op;

    const { homeid } = req.locals;

    const { type, subname, page, perPage: limit } = req.query;

    const offset = (page - 1) * limit;

    const subnameCondition = subname
      ? { name: { [Op.like]: `%${subname}%` } }
      : null;

    const typeCondition = type ? { type: type } : null;

    const condition = {
      houseid: homeid,
      ...typeCondition,
      ...subnameCondition,
    };

    const totalCount = await services.getTotalCount(db.device, condition);

    const records = await services.getDeviceRecords(condition, {
      limit,
      offset,
    });

    const parsedRecords = services.parseDeviceRecords(records);

    res.json({ data: parsedRecords, totalCount, page, perPage: limit });
  } catch (error) {
    next(error);
  }
};

module.exports = getDevices;
