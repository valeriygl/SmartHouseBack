const services = require('../../../services/v2/device');
const { rangeTypes, modeTypes } = require('../../../constants');

const postDevice = async (req, res, next) => {
  console.log('hi');
  try {
    const { body } = req;

    const device = services.getBaseDevice(body, req.params.homeid);

    console.log('device :', device);

    const deviceRecord = await services.addDevice(device);

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

    res.json({ ...body, id: deviceId });
  } catch (error) {
    console.log(error);
    // next(error)
  }
};

module.exports = postDevice;
