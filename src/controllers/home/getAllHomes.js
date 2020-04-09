const { readFile } = require('../../services');
const { storePath } = require('../../config');

const getAllHomes = async (req, res) => {
  try {
    const homes = await readFile(storePath);

    res.type('json');
    res.send(homes);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = getAllHomes;
