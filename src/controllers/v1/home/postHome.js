const { idHomePath } = require('../../../config');
const { getNextId } = require('../../../helpers');
const { readFile } = require('../../../services/v1');
const { addHome } = require('../../../services/v1/home');

const postHome = async (req, res) => {
  try {
    const id = await getNextId(idHomePath);

    const newHouse = { id: Number(id), ...req.body };

    let homes = await readFile();

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
