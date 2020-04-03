const path = require('path');
const { readFile, writeFile, deleteDeviceById } = require('../services');

const deleteDevice = async (req, res) => {
  const storePath = path.join(__dirname, '..', 'db', 'devices.json');

  try {
    const store = await readFile(storePath);

    const { devices } = JSON.parse(store);

    const id = Number(req.params.id);

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
