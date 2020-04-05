const {
  searchBySubname,
  readFile,
  paginate,
  searchByType,
} = require('../services');
const { storePath } = require('../config');

const getAllDevices = async (req, res) => {
  try {
    //const { page } = req.param;

    const store = await readFile(storePath);

    const { subname, type, page } = req.query;

    let { devices } = JSON.parse(store);

    if (subname) {
      devices = searchBySubname(devices, subname);
    }
    if (type) {
      devices = searchByType(devices, type);
    }
    devices = paginate(devices, page);
    res.json(devices);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = getAllDevices;
