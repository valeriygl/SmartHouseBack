const db = require('../../../models/sqlModels');
const { addItem } = require('../../../services/v2/device');

const postHome = async (req, res, next) => {
  try {
    const house = {
      name: req.body.name,
    };

    const newItem = await addItem(house, db.house);

    res.json(newItem);
  } catch (error) {
    next(error);
  }
};

module.exports = postHome;
