const { deleteDeviceById } = require('../../../services/v2/device');

const deleteDevice = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const isDone = await deleteDeviceById(id);

    if (isDone === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteDevice;
