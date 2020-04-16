const { getItemById } = require('../../../services/v1');

const getDevice = async (req, res) => {
  const id = Number(req.params.id);

  const { devices } = getItemById(req.locals.homeid, req.locals.homes);

  const device = getItemById(id, devices);

  if (device) {
    res.json(device);
    res.end();
  } else {
    res.sendStatus(404);
  }
};

module.exports = getDevice;
