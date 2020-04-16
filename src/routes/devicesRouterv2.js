const app = require('express');

const device = require('../controllers/v2/device');
const validationSchema = require('../helpers/schemas');
const { validationMiddleware, getDefaultPagParams } = require('../middlewares');

const devicesRouter = app.Router();

devicesRouter
  .route('/:homeid/devices')
  .post(
    validationMiddleware(validationSchema.device, 'body'),
    device.postDevice
  )
  .get(
    validationMiddleware(validationSchema.query, 'query'),
    getDefaultPagParams,
    device.getDevices
  );

devicesRouter.route('/:homeid/devices/:id').get(device.getDeviceByPk);

module.exports = devicesRouter;
