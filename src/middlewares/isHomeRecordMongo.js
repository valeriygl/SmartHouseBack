const { findHouseById } = require('../services/mongoSevices');

const isHomeRecordMongo = async (req, res, next) => {
  try {
    const homeid = req.params.homeid;

    await findHouseById(homeid);
    req.locals = { homeid };
    next();
  } catch (error) {
    if (error.name === 'CastError') {
      res.sendStatus(404);
    } else {
      next(error);
    }
  }
};

module.exports = isHomeRecordMongo;
