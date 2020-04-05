const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const {
  postDevice,
  getDevice,
  updateDevice,
  deleteDevice,
  getAllDevices,
  isHomeExist,
} = require('../controllers');

const devicesRouter = app.Router();

const jsonParser = bodyParser.json();

devicesRouter.use(errorHandler());
devicesRouter.use('/api/homes/:homeid', isHomeExist);
devicesRouter.post('/api/homes/:homeid/devices', jsonParser, postDevice);
devicesRouter.get('/api/homes/:homeid/devices', getAllDevices);
devicesRouter.get('/api/homes/1/devices/:id', getDevice);
devicesRouter.delete('/api/homes/1/devices/:id', deleteDevice);
devicesRouter.put('/api/homes/1/devices/:id', jsonParser, updateDevice);

module.exports = devicesRouter;
