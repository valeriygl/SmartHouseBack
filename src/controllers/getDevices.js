const { searchBySubname, readFile, paginate } = require('../services');
const { storePath } = require('../config');

const getAllDevices = async (req, res) => {
  try {
    //const { page } = req.param;

    const store = await readFile(storePath);

    const { subname, type, page } = req.query;

    let paginationData = {};
    let { devices } = JSON.parse(store);

    if (subname) {
      devices = searchBySubname(devices, subname);
    }
    if (type) {
    }
    paginationData = paginate(devices, page);
    res.json(paginationData);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = getAllDevices;
