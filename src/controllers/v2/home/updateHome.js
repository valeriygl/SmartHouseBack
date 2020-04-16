const { updateHomeById } = require('../../../services/v2/home');

const updateHome = async (req, res, next) => {
  try {
    const id = Number(req.params.homeid);

    const newHouse = req.body;

    const isDone = await updateHomeById(id, newHouse);

    if (isDone[0] === 1) {
      res.sendStatus(200);
    } else {
      res.send({
        message: `Cannot update House with id=${id}. Maybe House was not found!`,
      });
    }
  } catch (error) {
    // next(error);
  }
};

module.exports = updateHome;
