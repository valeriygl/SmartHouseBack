const { readFile, getDeviceById } = require('../services');
const path = require('path');
const { storePath } = require('../config/config');

const getDevice = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = getDevice;
