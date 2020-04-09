const { getNextId } = require('../../helpers');
const { idDevicePath } = require('../../config');
const { addDevice } = require('../../services/device');

const postDevice = async (req, res) => {
  try {
    const id = await getNextId(idDevicePath);

    const newDevice = { id: Number(id), ...req.body };

    const { homes, homeid } = req.locals;

    await addDevice(newDevice, homes, homeid);

    res.json(newDevice);
    res.end();
  } catch (error) {
    console.error(error);

    res.sendStatus(500);
  }
};

module.exports = postDevice;
