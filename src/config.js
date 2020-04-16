const path = require('path');

const port = process.env.PORT || 3001;

const storePath = path.join(__dirname, 'db', 'houses.json');

const idHomePath = path.join(__dirname, 'db', 'idHome.json');
const idDevicePath = path.join(__dirname, 'db', 'idDevice.json');

const dbConfig = {
  HOST: 'db',
  USER: 'root',
  PORT: '3306',
  PASSWORD: '123',
  DB: 'CHIRINOS',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  port,
  dbConfig,
  storePath,
  idHomePath,
  idDevicePath,
};
