const db = require('../models/sqlModels');
const { findHomeById } = require('../services/v2/home');

const isHomeRecordExist = async (req, res, next) => {
  try {
    const homeid = Number(req.params.homeid);

    const home = await findHomeById(homeid, db.house);

    if (home) {
      req.locals = { homeid };

      next();
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = isHomeRecordExist;
