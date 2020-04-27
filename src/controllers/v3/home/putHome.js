const { updateHome } = require('../../../services/mongoSevices');

const putHome = async (req, res, next) => {
  try {
    const { homeid } = req.params;

    const newHouse = req.body;

    const home = await updateHome(homeid, newHouse);

    if (home) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = putHome;
