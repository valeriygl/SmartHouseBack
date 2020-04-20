const services = require('../../../services/v2/device');

const getDeviceByPk = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await services.getDeviceRecords({ id: id });

    const device = services.parseDeviceRecords(record);

    if (device.length === 1) {
      res.json(...device);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getDeviceByPk;
