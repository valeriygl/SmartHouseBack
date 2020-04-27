const House = require('../../models/mongoModels/houseModel');

const updateDevice = async (homeId, deviceId, data) => {
  const updateResponse = await House.update(
    { _id: homeId, 'devices._id': deviceId },
    { 'devices.$': { _id: deviceId, ...data } }
  );

  console.log('updateResponse :>> ', updateResponse);

  return updateResponse;
};

module.exports = updateDevice;
