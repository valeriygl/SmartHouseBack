const { readFile, writeFile, deleteItemById } = require('../../services');
const { storePath } = require('../../config');

const deleteHome = async (req, res) => {
  try {
    const homes = await readFile(storePath);

    const parsedHomes = JSON.parse(homes);

    const id = Number(req.params.homeid);

    const { updatedItems: updatedHomes, wasUpdated } = deleteItemById(
      parsedHomes,
      id
    );

    if (!wasUpdated) {
      return res.sendStatus(404);
    }

    await writeFile(storePath, JSON.stringify(updatedHomes));

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = deleteHome;
