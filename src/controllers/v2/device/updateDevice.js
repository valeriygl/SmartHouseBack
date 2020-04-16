const services = require('../../../services/v2/device');
const { rangeTypes, modeTypes } = require('../../../constants');

const updateDevice = async (req, res, next) => {
  try {
    const { body } = req;

    const deviceId = Number(req.params.id);

    const device = services.getBaseDevice(body);

    await services.updateDeviceById(deviceId, device);

    await services.updateRangeById(
      {
        ...body.temp,
      },
      rangeTypes.TEMP,
      deviceId
    );

    const { modes } = body;

    const modeListRecords = await services.addDeviceModes(modes);

    const currentModeId = await services.getCurrentModeId(
      deviceId,
      modeTypes.DEFAULT
    );

    const modesId = services.getExistingModesId(modes);

    await services.deleteOldModes(currentModeId, modesId);

    await services.addModeToModeListRelation(
      modeListRecords,
      currentModeId,
      body.currentMode
    );

    res.json({ ...body, id: deviceId });
  } catch (error) {
    console.log(error);
    // next(error);
  }
};

module.exports = updateDevice;
