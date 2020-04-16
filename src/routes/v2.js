const express = require('express');

const homesRouter = require('./homesRouterv2');
const devicesRouter = require('./devicesRouterv2');

const v2 = express.Router();

v2.use('/homes', homesRouter);
v2.use('/homes', devicesRouter);

module.exports = v2;
