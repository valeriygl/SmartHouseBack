const { paginate, getItemById } = require('../../services');
const { searchBySubname, filterByType } = require('../../services/device');
const { getDefaultPagParams } = require('../../helpers');

const getAllDevices = async (req, res) => {
  const { subname, type, page, perPage } = req.query;

  const id = Number(req.params.homeid);

  let { devices } = getItemById(id, req.locals.homes);

  if (subname) {
    devices = searchBySubname(devices, subname);
  }

  if (type) {
    devices = filterByType(devices, type);
  }

  const pagParams = getDefaultPagParams(page, perPage);

  devices = paginate(devices, pagParams.page, pagParams.perPage);

  res.json(devices);
};

module.exports = getAllDevices;
