const { House } = require('../../models/mongoModels');

const removeDevice = async (homeId, deviceId) => {
  const home = await House.findById(homeId);

  const device = await home.devices.id(deviceId);

  if (device) {
    device.remove();

    home.save();
  }

  return device;
};

module.exports = removeDevice;
