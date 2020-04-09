const writeFile = require('../writeFile');
const { storePath } = require('../../config');

const addDevice = async (device, houses, id) => {
  try {
    const addedDevice = houses.map(house => {
      if (house.id === id) {
        house.devices.push(device);
      }
      return house;
    });

    const postedDevices = JSON.stringify(addedDevice);

    await writeFile(storePath, postedDevices);
  } catch (error) {
    console.error(error);
  }
};

module.exports = addDevice;
