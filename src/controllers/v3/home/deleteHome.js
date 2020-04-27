const { removeHome } = require('../../../services/mongoSevices');

const putHome = async (req, res, next) => {
  try {
    const { homeid } = req.params;

    const home = await removeHome(homeid);

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
