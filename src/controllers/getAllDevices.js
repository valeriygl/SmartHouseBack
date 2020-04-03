const { searchBySubname, readFile, paginate } = require('../services');
const path = require('path');

const getAllDevices = async (req, res) => {
    try {
  const storePath = path.join(__dirname, '..', 'db', 'devices.json');
  const page = 1 || req.param.page;
  const store = await readFile(storePath);
  const subname = req.query.subname;
  let paginationData = {};
  let { devices } = JSON.parse(store);
  if (subname) {
    const searchResult = searchBySubname(devices, subname);
    paginationData = paginate(searchResult,page);
  } else
  paginationData = paginate(devices,page);
  res.json(paginationData);
 
} catch (err) {
    console.error(err);
    res.sendStatus(500);
}
};

module.exports = getAllDevices;
