const { getNextId } = require('../helpers');
const { addDevice } = require('../services');
const { idDevicePath } = require('../config');

const postDevice = async (req, res) => {
  try {
    const id = await getNextId(idDevicePath);

    const newDevice = { id: Number(id), ...req.body };

    const homes = req.locals.homes;

    await addDevice(newDevice, homes, Number(req.params.homeid));
    res.json(newDevice);
    res.end();
  } catch (error) {
    console.error(error);

    res.sendStatus(500);
  }
};

module.exports = postDevice;
