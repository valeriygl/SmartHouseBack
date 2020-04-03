const fs = require('fs');

const addDevice = (index, device) => {
  fs.readFile('db/device.json', (err, data) => {
    let isUpdated = false;
    if (err) {
      throw console.error(err);
    }
    let { devices } = JSON.parse(data);
    if (devices.id == index) {
      devices.push(device);
      isUpdated = true;
    }
    return new Promise((resolve, reject) => {
      fs.writeFile('db/devices.json', JSON.stringify(devices), err => {
        if (err) reject(err);
        
      });
    });
  });
};

module.exports = addDevice;
