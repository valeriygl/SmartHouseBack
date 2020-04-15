const services = require('../../../services/v1');

const deleteDevice = async (req, res) => {
  try {
    const { homes, homeid } = req.locals;

    const targetHome = services.getItemById(homeid, homes);

    const { devices } = targetHome;

    const id = Number(req.params.id);

    const {
      updatedItems: updatedDevices,
      wasUpdated,
    } = services.deleteItemById(devices, id);

    if (!wasUpdated) {
      res.sendStatus(404);

      return;
    }

    const newHome = {
      id: homeid,
      name: targetHome.name,
      devices: updatedDevices,
    };

    const { updatedItems: updatedHomes } = services.updateItemById(
      homes,
      homeid,
      newHome
    );

    await services.writeFile(JSON.stringify(updatedHomes));

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = deleteDevice;
