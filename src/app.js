const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const db = require('./models');
const router = require('./routes');
const { port } = require('./config');
const post = require('./controllers/postHomeDb');
const postD = require('./controllers/postDeviceDb');

const getDevices = require('./controllers/getDevicesDb');
const getDevice = require('./controllers/getDeviceByPk');

const {
  deleteHome,
  getAllHomes,
  updateHome,
} = require('./controllers/v2/home');

const app = express();

const jsonParser = bodyParser.json();

db.sequelize.sync();

dotenv.config();

app.use(logger(process.env.NODE_ENV));
app.use(errorHandler());
app.use(cors());
app.use(jsonParser);

app.post('/', post.create);
app.post('/:homeid', postD.create);

app.get('/', getDevices.findAll);
app.get('/devices/:id', getDevice.findOne);
app.delete('/:homeid', deleteHome);
app.get('/', getAllHomes);
app.put('/:homeid', updateHome);

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server spinning on port ${port}`);
});

module.exports = app;
