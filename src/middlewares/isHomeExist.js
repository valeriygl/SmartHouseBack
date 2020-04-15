const { readFile, getItemById } = require('../services/v1');

const isHomeExist = async (req, res, next) => {
  const id = Number(req.params.homeid);

  let homes = [];

  try {
    const store = await readFile();

    homes = JSON.parse(store);
  } catch (error) {
    res.sendStatus(500);
  }

  const targetHome = getItemById(id, homes);

  if (targetHome) {
    req.locals = { homes, homeid: id };

    next();
  } else {
    res.sendStatus(404);
  }
};

module.exports = isHomeExist;
