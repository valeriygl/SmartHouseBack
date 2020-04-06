const { searchBySubname, paginate, filterByType } = require('../services');

const getAllDevices = async (req, res) => {
  try {
    const { subname, type, page } = req.query;

    let { devices } = req.locals.homes[req.params.homeid - 1];

    if (subname) {
      devices = searchBySubname(devices, subname);
    }

    if (type) {
      devices = filterByType(devices, type);
    }

    devices = paginate(devices, page);

    res.json(devices);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = getAllDevices;
