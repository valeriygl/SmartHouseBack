const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const db = require('./models/sqlModels');
const router = require('./routes');
const { port } = require('./config');
const mongo = require('./mongoConfig');

const app = express();

const jsonParser = bodyParser.json();

db.sequelize.sync();
mongo();

dotenv.config();

app.use(logger(process.env.NODE_ENV));
app.use(cors());
app.use(jsonParser);

app.use('/api', router);

app.use(errorHandler());

app.listen(port, () => {
  console.log(`Server spinning on port ${port}`);
});

module.exports = app;
