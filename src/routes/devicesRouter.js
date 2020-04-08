const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const validationSchema = require('../helpers/schemas');
const { validationMiddleware, isHomeExist } = require('../middlewares');
const {
  postDevice,
  getDevice,
  updateDevice,
  deleteDevice,
  getDevices,
} = require('../controllers/device');

const devicesRouter = app.Router();

const jsonParser = bodyParser.json();

devicesRouter.use(errorHandler());
devicesRouter.use('/:homeid/devices', isHomeExist);
devicesRouter.post(
  '/:homeid/devices',
  jsonParser,
  validationMiddleware(validationSchema.device, 'body'),
  postDevice
);
devicesRouter.get(
  '/:homeid/devices',
  validationMiddleware(validationSchema.query, 'query'),
  getDevices
);
devicesRouter.get('/:homeid/devices/:id', getDevice);
devicesRouter.delete('/:homeid/devices/:id', deleteDevice);
devicesRouter.put(
  '/:homeid/devices/:id',
  jsonParser,
  validationMiddleware(validationSchema.device, 'body'),
  updateDevice
);

module.exports = devicesRouter;
