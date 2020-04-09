const { readFile, writeFile, updateItemById } = require('../../services');
const { storePath } = require('../../config');

const updateHome = async (req, res) => {
  try {
    const homes = await readFile(storePath);

    const parsedHomes = JSON.parse(homes);

    const id = Number(req.params.homeid);

    const newHome = req.body;

    const { updatedItems: updatedHomes, wasUpdated } = updateItemById(
      parsedHomes,
      id,
      newHome
    );

    if (!wasUpdated) {
      res.sendStatus(404);

      return;
    }

    await writeFile(storePath, JSON.stringify(updatedHomes));

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = updateHome;
