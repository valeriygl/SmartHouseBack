const { readFile } = require('../../services');
const { storePath } = require('../../config');

const getAllHomes = async (req, res) => {
  const homes = await readFile(storePath);

  res.type('json');
  res.send(homes);
};

module.exports = getAllHomes;
