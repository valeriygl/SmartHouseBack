const writeFile = require('./writeFile');
const { storePath } = require('../config');

const addDevice = async (device, house, index) => {
  try {
    house[index - 1].devices.push(device);

    const postedDevices = JSON.stringify(house);

    await writeFile(storePath, postedDevices);
  } catch (error) {
    console.error(error);
  }
};

module.exports = addDevice;
