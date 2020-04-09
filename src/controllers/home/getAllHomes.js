const { readFile } = require('../../services');

const getAllHomes = async (req, res) => {
  try {
    const homes = await readFile();

    res.type('json');
    res.send(homes);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = getAllHomes;
