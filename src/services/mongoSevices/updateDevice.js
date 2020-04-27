const { House } = require('../../models/mongoModels');

const updateDevice = async (homeId, deviceId, data) => {
  const updateResponse = await House.update(
    { _id: homeId, 'devices._id': deviceId },
    { 'devices.$': { _id: deviceId, ...data } }
  );

  return updateResponse;
};

module.exports = updateDevice;
