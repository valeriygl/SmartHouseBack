const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const {
  postDevice,
  getDevice,
  updateDevice,
  deleteDevice,
  getAllDevices,
} = require('../controllers');

const devicesRouter = app.Router();

const jsonParser = bodyParser.json();

devicesRouter.use(errorHandler());
devicesRouter.post('/api/homes/:homeid', jsonParser, postDevice);
devicesRouter.get('/api/homes/:homeid', getAllDevices);
devicesRouter.get('/api/homes', getDevice);
devicesRouter.delete('/api/homes/:homeid', deleteDevice);
devicesRouter.put('/api/homes/:homeid', jsonParser, updateDevice);

module.exports = devicesRouter;
