const db = require('../../../models');
const services = require('../../../services/v2/device');
const { rangeTypes, modeTypes } = require('../../../constants');

const postDevice = async (req, res, next) => {
  try {
    const { body } = req;

    const device = services.parseBaseDevice(body);

    const deviceRecord = await services.addItem(
      { ...device, houseId: req.params.homeid },
      db.device
    );

    const deviceId = deviceRecord.id;

    if (body.temp) {
      await services.addRange({
        ...body.temp,
        type: rangeTypes.TEMP,
        deviceId,
      });
    }

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
    next(error);
  }
};

module.exports = postDevice;
