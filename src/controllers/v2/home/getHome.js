const db = require('../../../models');
const { findHomeById } = require('../../../services/v2/home');

const getHome = async (req, res) => {
  const { homeid } = req.params;

  const home = await findHomeById(homeid, db.house);

  if (home) {
    res.json(home);
  } else {
    res.sendStatus(404);
  }
};

module.exports = getHome;
