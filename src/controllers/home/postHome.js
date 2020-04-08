const { getNextId } = require('../helpers');
const { addHome } = require('../services');
const { readFile } = require('../services');
const { storePath, idHomePath } = require('../config');

const postHome = async (req, res) => {
  try {
    const id = await getNextId(idHomePath);

    const newHouse = { id: Number(id), ...req.body };

    let homes = await readFile(storePath);

    homes = JSON.parse(homes);
    await addHome(newHouse, homes);
    res.json(newHouse);
    res.end();
  } catch (error) {
    console.error(error);

    res.sendStatus(500);
  }
};

module.exports = postHome;
