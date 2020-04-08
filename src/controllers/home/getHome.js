const { getItemById, readFile } = require('../../services');
const { storePath } = require('../../config');

const getHome = async (req, res) => {
  try {
    const homeid = Number(req.params.homeid);

    let homes = await readFile(storePath);

    homes = JSON.parse(homes);

    const home = getItemById(homeid, homes);

    if (home) {
      res.json(home);
      res.end();
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = getHome;
