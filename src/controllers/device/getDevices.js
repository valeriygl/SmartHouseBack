const { paginate, getItemById } = require('../../services');
const { searchBySubname, filterByType } = require('../../services/device');

const getAllDevices = async (req, res) => {
  try {
    const { subname, type, page, perPage } = req.query;

    const id = Number(req.params.homeid);

    let { devices } = getItemById(id, req.locals.homes);

    if (subname) {
      devices = searchBySubname(devices, subname);
    }

    if (type) {
      devices = filterByType(devices, type);
    }

    devices = paginate(devices, page, perPage);

    res.json(devices);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = getAllDevices;
