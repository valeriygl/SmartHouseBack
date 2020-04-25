const { addHouse } = require('../../../services/mongoSevices');

const postHome = async (req, res) => {
  const result = await addHouse(req.body);
  res.json(result);
};

module.exports = postHome;
