const { updateHomeById } = require('../../../services/v2/home');

const updateHome = async (req, res, next) => {
  try {
    const id = Number(req.params.homeid);

    const newHouse = req.body;

    const isDone = await updateHomeById(id, newHouse);

    if (isDone[0] === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = updateHome;
