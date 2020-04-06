const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const { port } = require('./config');
const { devicesRouter, homesRouter } = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(errorHandler());
app.use('/api/homes', homesRouter);
app.use('/api/homes/:homeid/devices', devicesRouter);

app.listen(port, () => {
  console.log('Server spinning on port 3000');
});
