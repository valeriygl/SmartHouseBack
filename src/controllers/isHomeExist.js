const { readFile } = require('../services');
const { storePath } = require('../config');

const isHomeExist = async (req, res, next) => {
  const id = Number(req.params.homeid);

  const store = await readFile(storePath);

  const homes = JSON.parse(store);

  const isExist = homes.find(home => home.id === id);

  if (isExist) {
    next();
  } else {
    res.sendStatus(404);
  }
};

module.exports = isHomeExist;
