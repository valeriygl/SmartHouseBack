const { paginate } = require('../../../services/v1');
const { findDevices } = require('../../../services/mongoSevices');

const getDevices = async (req, res, next) => {
  try {
    const { homeid } = req.locals;
    const { type, subname, page, perPage } = req.query;
    let devices = await findDevices(homeid, type, subname);
    devices = paginate(devices, page, perPage);
    res.json(devices);
  } catch (err) {
    next(err);
  }
};

module.exports = getDevices;
