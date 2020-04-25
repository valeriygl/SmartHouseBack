const app = require('express');

const device = require('../controllers/v3/device');
const validationSchema = require('../helpers/schemas');
const { validationMiddleware, getDefaultPagParams } = require('../middlewares');

const devicesRouterv3 = app.Router();

devicesRouterv3
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

devicesRouterv3.route('/:id').get(device.getDevice);

module.exports = devicesRouterv3;
