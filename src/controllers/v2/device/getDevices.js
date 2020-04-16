const db = require('../../../models');
const services = require('../../../services/v2/device');

const getDevices = async (req, res) => {
  const Op = db.Sequelize.Op;

  const { homeid } = req.params;

  const { type, subname } = req.query;

  const totalCount = await services.getTotalCount(db.device, Number(homeid));

  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.perPage) || 8;

  const offset = (page - 1) * limit;

  const subnameCondition = subname
    ? { name: { [Op.like]: `%${subname}%` } }
    : null;

  const typeCondition = type ? { type: type } : null;

  const records = await services.getDeviceRecords(
    {
      houseid: homeid,
      ...typeCondition,
      ...subnameCondition,
    },
    { limit, offset }
  );
  const parsedRecords = services.parseDeviceRecords(records);
  res.json({ data: parsedRecords, totalCount, page, perPage: limit });
};

module.exports = getDevices;
