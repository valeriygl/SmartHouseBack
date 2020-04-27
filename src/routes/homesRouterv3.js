const app = require('express');

const home = require('../controllers/v3/home');
const validationSchema = require('../helpers/schemas');
const { validationMiddleware } = require('../middlewares');

const homesRouterv3 = app.Router();

homesRouterv3
  .route('/')
  .post(validationMiddleware(validationSchema.homePOST, 'body'), home.postHome)
  .get(home.getHomes);

homesRouterv3
  .route('/:homeid')
  .get(home.getHome)
  .delete(home.deleteHome)
  .put(validationMiddleware(validationSchema.homePUT, 'body'), home.putHome);

module.exports = homesRouterv3;
