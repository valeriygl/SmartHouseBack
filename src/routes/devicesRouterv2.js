const app = require('express');

const device = require('../controllers/v2/device');
const validationSchema = require('../helpers/schemas');
const { validationMiddleware, getDefaultPagParams } = require('../middlewares');

const devicesRouter = app.Router();

devicesRouter
  .route('/')
  .post(
    validationMiddleware(validationSchema.device, 'body'),
    device.postDevice
  )
  .get(
    validationMiddleware(validationSchema.query, 'query'),
    getDefaultPagParams,
    device.getDevices
  );

devicesRouter
  .route('/:id')
  .get(device.getDeviceByPk)
  .put(
    validationMiddleware(validationSchema.device, 'body'),
    device.updateDevice
  )
  .delete(device.deleteDevice);

module.exports = devicesRouter;
