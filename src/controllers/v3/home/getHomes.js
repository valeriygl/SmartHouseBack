const { getAllHomes } = require('../../../services/mongoSevices');

const putHome = async (req, res, next) => {
  try {
    const { homeid } = req.params;

    const homes = await getAllHomes(homeid);

    res.json(homes);
  } catch (error) {
    next(error);
  }
};

module.exports = putHome;
