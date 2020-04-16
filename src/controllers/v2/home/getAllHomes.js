const { findAllHomes } = require('../../../services/v2/home');

const getAllHomes = async (req, res, next) => {
  try {
    const homes = await findAllHomes();

    res.json(homes);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllHomes;
