const { updateDevice } = require('../../../services/mongoSevices');

const putDevice = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { homeid } = req.locals;

    const updateRes = await updateDevice(homeid, id, req.body);

    if (updateRes.nModified > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = putDevice;
