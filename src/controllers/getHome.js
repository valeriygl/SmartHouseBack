const { getHomeById } = require('../services');

const getHome = async (req, res) => {
  try {
    const homeid = Number(req.params.homeid);

    let homes = req.locals.homes;

    const home = getHomeById(homeid, homes);

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
