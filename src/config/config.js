const path = require('path');

const port = process.env.PORT || 3000;

const storePath = path.join(__dirname, '..', 'db', 'devices.json');

const idPath = path.join(__dirname, '..', 'db', 'idStore.json');

module.exports = {
  port,
  storePath,
  idPath,
};
