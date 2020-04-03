const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const router = require('./routes/router')
const app = express();

app.use(logger('dev'));
app.use(errorHandler());
app.use('/', router);


app.listen(3000, () => {
  console.log('Server spinning on port 3000');
});
