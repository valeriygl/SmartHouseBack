const services = require('../../../services/v1/device');
const { paginate, getItemById } = require('../../../services/v1');

const getAllDevices = async (req, res) => {
  const { subname, type, page, perPage } = req.query;

  let { devices } = getItemById(req.locals.homeid, req.locals.homes);

  if (subname) {
    devices = services.searchBySubname(devices, subname);
  }

  if (type) {
    devices = services.filterByType(devices, type);
  }

  devices = paginate(devices, page, perPage);

  res.json(devices);
};

module.exports = getAllDevices;
