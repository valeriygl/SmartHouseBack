const { readFile, writeFile, deleteItemById } = require('../../services');

const deleteHome = async (req, res) => {
  try {
    const homes = await readFile();

    const parsedHomes = JSON.parse(homes);

    const id = Number(req.params.homeid);

    const { updatedItems: updatedHomes, wasUpdated } = deleteItemById(
      parsedHomes,
      id
    );

    if (!wasUpdated) {
      res.sendStatus(404);

      return;
    }

    await writeFile(JSON.stringify(updatedHomes));

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = deleteHome;
