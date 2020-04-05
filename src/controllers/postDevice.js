const getNextId = require('../helpers');
const path = require('path');
const { addDevice } = require('../services');
const { storePath, idPath } = require('../config/config');

const postDevice = async (req, res) => {
  try {
    const id = await getNextId(idPath);

    const newDevice = { id: id.toString(), ...req.body };

    await addDevice(newDevice, storePath);
    res.json(newDevice);
    res.end();
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = postDevice;
