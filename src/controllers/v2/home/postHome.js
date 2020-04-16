const db = require('../../../models');
const { addItem } = require('../../../services/v2/device');

const postHome = async (req, res) => {
  const house = {
    name: req.body.name,
  };

  const newItem = await addItem(house, db.house);

  res.json(newItem);
};

module.exports = postHome;
