const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const { port } = require('./config');
const { devicesRouter } = require('./routes');
const app = express();

app.use(logger('dev'));
app.use(errorHandler());
app.use('/', devicesRouter);

app.listen(port, () => {
  console.log('Server spinning on port 3000');
});
