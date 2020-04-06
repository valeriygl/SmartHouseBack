const { readFile, writeFile, deleteDeviceById } = require('../services');
const { storePath } = require('../config');

const deleteDevice = async (req, res) => {
  try {
    const store = await readFile(storePath);

    const devices = JSON.parse(store);

    const { id, homeid } = Number(req.params);

    const updatedDevices = deleteDeviceById(devices, id);

    const updatedStore = JSON.stringify({ devices: updatedDevices });

    await writeFile(storePath, updatedStore);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = deleteDevice;
