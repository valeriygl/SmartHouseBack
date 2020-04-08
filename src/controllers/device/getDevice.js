const { getItemById } = require('../../services');

const getDevice = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const homeid = Number(req.params.homeid);

    const { devices } = getItemById(homeid, req.locals.homes);

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
