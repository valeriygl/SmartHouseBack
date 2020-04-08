const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const { postHome, getHome, validationMiddleware } = require('../controllers');
const { validationSchema } = require('../services');
const { updateHome, deleteHome, getAllHomes } = require('../controllers/home');

const homesRouter = app.Router();

const jsonParser = bodyParser.json();

homesRouter.use(errorHandler());

homesRouter.post(
  '/',
  jsonParser,
  validationMiddleware(validationSchema.homePOST),
  postHome
);
homesRouter.get('/', getAllHomes);
homesRouter.get('/:homeid', getHome);
homesRouter.delete('/:homeid', deleteHome);
homesRouter.put(
  '/:homeid',
  jsonParser,
  validationMiddleware(validationSchema.homePUT),
  updateHome
);

module.exports = homesRouter;
