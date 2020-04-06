const path = require('path');

const port = process.env.PORT || 3000;

const storePath = path.join(__dirname, 'db', 'houses.json');

const idHomePath = path.join(__dirname, 'db', 'idHome.json');
const idDevicePath = path.join(__dirname, 'db', 'idDevice.json');

module.exports = {
  port,
  storePath,
  idHomePath,
  idDevicePath,
};
