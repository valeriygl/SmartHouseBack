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
devicesRouter.use('/:homeid/devices', isHomeExist);
devicesRouter.post('/:homeid/devices', jsonParser, postDevice);
devicesRouter.get('/:homeid/devices', getAllDevices);
devicesRouter.get('/:homeid/devices/:id', getDevice);
devicesRouter.delete('/:homeid/devices/:id', deleteDevice);
devicesRouter.put('/:homeid/devices/:id', jsonParser, updateDevice);

module.exports = devicesRouter;
