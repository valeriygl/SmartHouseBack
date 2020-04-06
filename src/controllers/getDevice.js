const { getItemById } = require('../services');

const getDevice = async (req, res) => {
  try {
    const id = Number(req.params.id);

    let { devices } = req.locals.homes[req.params.homeid - 1];

    const device = getItemById(id, devices);

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
