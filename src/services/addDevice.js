const fs = require('fs');

const addDevice = device => {
  fs.readFile('db/device.json', (err, data) => {
    if (err) {
      throw console.error(err);
    }
    let { devices } = JSON.parse(data);
    devices.push(device);
    fs.writeFile('db/devices.json', JSON.stringify(devices));
  });
};

module.exports = addDevice;
