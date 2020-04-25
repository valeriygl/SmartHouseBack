const { findHouseById } = require('../../../services/mongoSevices');

const getHome = async (req, res, next) => {
  try {
    const { homeid } = req.params;
    const house = await findHouseById(homeid);
    res.json(house);
  } catch (err) {
    next(err);
  }
};

module.exports = getHome;
