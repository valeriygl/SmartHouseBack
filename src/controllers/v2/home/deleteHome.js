const { deleteHomeById } = require('../../../services/v2/home');

// не удаляются записи из таблицы modeList
const deleteHome = async (req, res, next) => {
  try {
    const id = Number(req.params.homeid);

    const isDone = await deleteHomeById(id);

    if (isDone[0] === 1) {
      res.sendStatus(200);
    } else {
      res.send({
        message: `Cannot delete House with id=${id}. Maybe House was not found!`,
      });
    }
  } catch (error) {
    // next(error);
  }
};

module.exports = deleteHome;
