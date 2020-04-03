const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const router = app.Router();
const jsonParser = bodyParser.json();
const {
  postDevice,
  getDevice,
  updateDevice,
  deleteDevice,
  getAllDevices
} = require('../controllers');

router.use(errorHandler());
router.post('/api/homes/1/devices', jsonParser, (req, res, next) => postDevice(req, res, next));
router.get('/api/homes/1/devices', (req, res, next) => getAllDevices(req,res));
/*router.get('/api/homes/1/devices', (req, res, next) => {
  //res.send(devices);
  res.json(devices);
  res.sendStatus(200);
  res.end();
});*/
router.get('/api/homes/1/devices/:id', (req, res, next) => getDevice(req, res));
router.delete('/api/homes/1/devices/:id', (req, res, next) => deleteDevice(req, res));

router.put('/api/homes/1/devices/:id', jsonParser, (req, res, next) => updateDevice(req, res));

module.exports = router;
