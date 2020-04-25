const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

// const db = require('./models/sqlModels');
const router = require('./routes');
const { port } = require('./config');
const mongo = require('./mongoConfig');

// for test
// const postHome = require('./controllers/v3/home/postHome');
const controllers = require('./controllers/v3/home');
const devControllers = require('./controllers/v3/device');
// end

const app = express();

const jsonParser = bodyParser.json();

// db.sequelize.sync();
mongo();

dotenv.config();

app.use(logger(process.env.NODE_ENV));
app.use(cors());
app.use(jsonParser);

app.use('/api', router);
app.post('/houses', controllers.postHome);
app.get('/houses/:homeid/devices', devControllers.getDevices);
app.get('/houses/:homeid', controllers.getHome);
app.post('/houses/:homeid/devices', devControllers.postDevice);
app.get('/houses/:homeid/devices/:id', devControllers.getDevice);

app.use(errorHandler());

app.listen(port, () => {
  console.log(`Server spinning on port ${port}`);
});

module.exports = app;
