const { readFile, getDeviceById } = require('../services');
const path = require('path');

const getDevice = async (req, res) => {
  const storePath = path.join(__dirname, '..', 'db', 'devices.json');
  const id = Number(req.params.id);
  const store = await readFile(storePath);
  const { devices } = JSON.parse(store);
  const device = getDeviceById(id, devices);
  if (device) {
    res.json(device);
    res.end();
  } else {
    res.sendStatus(404);
  }
};

module.exports = getDevice;
