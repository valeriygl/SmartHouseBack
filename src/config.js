const path = require('path');

const port = process.env.PORT || 3001;

const storePath = path.join(__dirname, 'db', 'houses.json');

const idHomePath = path.join(__dirname, 'db', 'idHome.json');
const idDevicePath = path.join(__dirname, 'db', 'idDevice.json');

const dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PORT: '3307',
  PASSWORD: '',
  DB: 'testdb',
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
