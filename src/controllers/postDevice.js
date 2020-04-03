const getNextId = require('../helpers');
const path = require('path');
const { addDevice } = require('../services');

const postDevice = async (req, res, next) => {
  const idPath = path.join(__dirname, '..', 'db', 'idStore.json');
  const storePath = path.join(__dirname, '..', 'db', 'devices.json');
  const id = await getNextId(idPath);
  const newDevice = { ...req.body, id: id.toString() };

  await addDevice(newDevice, storePath);
  res.json(newDevice);
  res.end();
  next();
};

module.exports = postDevice;
