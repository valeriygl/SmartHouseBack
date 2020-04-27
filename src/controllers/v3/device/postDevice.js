const { addDevice } = require('../../../services/mongoSevices');

const postDevice = async (req, res, next) => {
  try {
    const { homeid } = req.locals;
    const device = await addDevice(homeid, req.body);
    res.send(device);
  } catch (err) {
    if (err.name === 'CastError') {
      res.sendStatus(404);
    } else {
      next(err);
    }
  }
};

module.exports = postDevice;
