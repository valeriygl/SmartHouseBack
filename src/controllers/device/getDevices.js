const { paginate, getItemById } = require('../../services');
const { searchBySubname, filterByType } = require('../../services/device');

const getAllDevices = async (req, res) => {
  const { subname, type, page, perPage } = req.query;

  let { devices } = getItemById(req.locals.homeid, req.locals.homes);

  if (subname) {
    devices = searchBySubname(devices, subname);
  }

  if (type) {
    devices = filterByType(devices, type);
  }

  devices = paginate(devices, page, perPage);

  res.json(devices);
};

module.exports = getAllDevices;
