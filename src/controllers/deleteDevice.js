const { writeFile, deleteItemById, updateItemById } = require('../services');
const { storePath } = require('../config');

const deleteDevice = async (req, res) => {
  try {
    const { homes } = req.locals;

    const homeid = Number(req.params.homeid);

    const targetHome = homes.find(home => home.id === homeid);

    const { devices } = targetHome;

    const id = Number(req.params.id);

    const { updatedItems: updatedDevices, wasUpdated } = deleteItemById(
      devices,
      id
    );

    if (!wasUpdated) {
      return res.sendStatus(404);
    }

    const newHome = {
      id: homeid,
      name: targetHome.name,
      devices: updatedDevices,
    };

    const { updatedItems: updatedHomes } = updateItemById(
      homes,
      homeid,
      newHome
    );

    await writeFile(storePath, JSON.stringify(updatedHomes));

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = deleteDevice;
