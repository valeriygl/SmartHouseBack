const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const {
  postHome,
  getHome,
  updateDevice,
  deleteDevice,
  getAllDevices,
} = require('../controllers');

const homesRouter = app.Router();

const jsonParser = bodyParser.json();

homesRouter.use(errorHandler());
homesRouter.post('/', jsonParser, postHome);
homesRouter.get('/api/homes', getAllDevices);
homesRouter.get('/:homeid', getHome);
homesRouter.delete('/api/homes/:homeid', deleteDevice);
homesRouter.put('/api/homes/:homeid', jsonParser, updateDevice);

module.exports = homesRouter;
