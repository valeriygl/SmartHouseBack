const app = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const { postHome, getHome } = require('../controllers');
const { updateHome, deleteHome, getAllHomes } = require('../controllers/home');

const homesRouter = app.Router();

const jsonParser = bodyParser.json();

homesRouter.use(errorHandler());
homesRouter.post('/api/homes', jsonParser, postHome);
homesRouter.get('/api/homes', getAllHomes);
homesRouter.get('/api/homes/:homeid', getHome);
homesRouter.delete('/api/homes/:homeid', deleteHome);
homesRouter.put('/api/homes/:homeid', jsonParser, updateHome);

module.exports = homesRouter;
