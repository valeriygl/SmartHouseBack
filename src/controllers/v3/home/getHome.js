const { findHouseById } = require('../../../services/mongoSevices');

const getHome = async (req, res, next) => {
  const { homeid } = req.params;
  const house = await findHouseById(homeid);
  res.json(house);
};

module.exports = getHome;
