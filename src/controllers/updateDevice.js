const { updateDeviceById } = require('../services');
const { updateHomeInStore } = require('../services/homes');
const { storePath } = require('../config');

const updateDevice = async (req, res) => {
  try {
    const { homes } = req.locals;

    const homeid = Number(req.params.homeid);

    const targetHome = homes.find(home => home.id === homeid);

    const { devices } = targetHome;

    const id = Number(req.params.id);

    const newDevice = req.body;

    const { updatedDevices, wasUpdated } = updateDeviceById(
      devices,
      id,
      newDevice
    );

    if (!wasUpdated) {
      return res.sendStatus(404);
    }

    const newHome = {
      id: homeid,
      name: targetHome.name,
      devices: updatedDevices,
    };

    await updateHomeInStore(storePath, homes, newHome);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = updateDevice;
