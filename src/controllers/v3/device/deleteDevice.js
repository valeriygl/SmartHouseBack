const { removeDevice } = require('../../../services/mongoSevices');

const deleteDevice = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { homeid } = req.locals;

    const device = await removeDevice(homeid, id);

    if (device) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = deleteDevice;
