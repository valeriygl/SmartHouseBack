const getNextId = require('../helpers');
const { addDevice } = require('../services');

const postDevice = async (req, res, next) => {
  const id = await getNextId('db/idStore.json');
  const newDevice = { ...req.body, id: id.toString() };

  addDevice(newDevice);
  res.json(newDevice);
  res.end();
  next();
};

module.exports = postDevice;
