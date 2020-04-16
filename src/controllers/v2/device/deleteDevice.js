const { deleteDeviceById } = require('../../../services/v2/device');

// не удаляются записи из таблицы modeList
const deleteDevice = async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    const isDone = await deleteDeviceById(id);

    if (isDone === 1) {
      res.sendStatus(200);
    } else {
      res.send({
        message: `Cannot delete Device with id=${id}. Maybe Device was not found!`,
      });
    }
  } catch (error) {
    // next(error);
  }
};

module.exports = deleteDevice;
