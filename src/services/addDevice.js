const fs = require('fs');
const readFile = require('./readFile');
const writeFile = require('./writeFile');

const addDevice = async (device, path) => {
  try {
    const store = await readFile(path);
    let { devices } = JSON.parse(store);
    devices.push(device);
    const postedDevices = JSON.stringify({ devices: devices });
    await writeFile(path, postedDevices);
  } catch (error) {
    console.error(error);
  }
};

module.exports = addDevice;
