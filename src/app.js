const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const { deleteDevice, updateDevice } = require('./controllers');
const app = express();
let devices = [];
let id = 1;
function generateID() {
  return id++;
}
let jsonParser = bodyParser.json();
let router = express.Router();

router.use(logger('dev'));
app.use(errorHandler());
app.use(bodyParser.json());

app.delete('/homes/:homeId/devices/:id', deleteDevice);
app.put('/homes/:homeId/devices/:id', updateDevice);

app.post('/devices', jsonParser, (req, res, next) => {
  let device = req.body;
  device.id = generateID();
  devices.push(device);
  res.sendStatus(201);
  res.end();
});
app.get('/devices', (req, res, next) => {
  //res.send(devices);
  res.json(devices);
  res.sendStatus(200);
  res.end();
});
app.get('/devices/:id', function(req, res, next) {
  let index = req.params.id - 1;
  if (devices[index]) {
    res.json(devices[index]);
    res.end();
  } else res.sendStatus(404);
});
app.delete('/devices/:id', function(req, res, next) {
  let index = req.params.id - 1;
  devices.splice(index, 1);
  res.sendStatus(200);
  res.end();
});

app.put('/devices/:id', jsonParser, function(req, res, next) {
  let index = req.params.id - 1;
  devices[index] = req.body;
  res.sendStatus(204);
  res.end();
});

app.listen(3000, () => {
  console.log('Server spinning on port 3000');
});
