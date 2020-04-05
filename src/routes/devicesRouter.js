const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const devicesRouter = app.Router();
const jsonParser = bodyParser.json();
const {
  postDevice,
  getDevice,
  updateDevice,
  deleteDevice,
  getAllDevices
} = require('../controllers');

devicesRouter.use(errorHandler());
devicesRouter.post('/api/homes/1/devices', jsonParser,  postDevice);
devicesRouter.get('/api/homes/1/devices',getAllDevices);
/*router.get('/api/homes/1/devices', (req, res, next) => {
  //res.send(devices);
  res.json(devices);
  res.sendStatus(200);
  res.end();
});*/
devicesRouter.get('/api/homes/1/devices/:id',getDevice);
devicesRouter.delete('/api/homes/1/devices/:id',deleteDevice);

devicesRouter.put('/api/homes/1/devices/:id',updateDevice);

module.exports = devicesRouter;
