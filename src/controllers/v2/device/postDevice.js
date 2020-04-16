const services = require('../../../services/v2/device');
const { rangeTypes, modeTypes } = require('../../../constants');

const postDevice = async (req, res, next) => {
  try {
    const { body } = req;

    const device = services.getBaseDevice(body);

    const deviceRecord = await services.addDevice(device, req.params.homeid);

    const deviceId = deviceRecord.id;

    await services.addRange({
      ...body.temp,
      type: rangeTypes.TEMP,
      deviceId,
    });

    const modeListRecords = await services.addDeviceModes(body.modes);

    const modeRecord = await services.addDeviceMode({
      deviceId,
      type: modeTypes.DEFAULT,
    });

    await services.addModeToModeListRelation(
      modeListRecords,
      modeRecord.id,
      body.currentMode
    );

    res.json({ id: deviceId, ...body });
  } catch (error) {
    console.log(error);
    // next(error)
  }
};

module.exports = postDevice;
