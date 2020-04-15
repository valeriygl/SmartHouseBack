const app = require('express');

const home = require('../controllers/v1/home');
const validationSchema = require('../helpers/schemas');
const { validationMiddleware } = require('../middlewares');

const homesRouter = app.Router();

homesRouter
  .route('/')
  .post(validationMiddleware(validationSchema.homePOST, 'body'), home.postHome)
  .get(home.getAllHomes);

homesRouter
  .route('/:homeid')
  .get(home.getHome)
  .delete(home.deleteHome)
  .put(validationMiddleware(validationSchema.homePUT, 'body'), home.updateHome);

module.exports = homesRouter;
