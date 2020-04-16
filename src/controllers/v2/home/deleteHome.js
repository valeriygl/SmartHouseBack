const { deleteHomeById } = require('../../../services/v2/home');

const deleteHome = async (req, res, next) => {
  try {
    const id = Number(req.params.homeid);

    const isDone = await deleteHomeById(id);

    if (isDone === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteHome;
