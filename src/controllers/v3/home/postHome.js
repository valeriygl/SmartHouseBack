const { addHouse } = require('../../../services/mongoSevices');

const postHome = async (req, res, next) => {
  try {
    const result = await addHouse(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = postHome;
