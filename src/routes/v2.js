const express = require('express');

const { isHomeRecordExist } = require('../middlewares');

const homesRouter = require('./homesRouterv2');
const devicesRouter = require('./devicesRouterv2');

const v2 = express.Router();

v2.use('/homes', homesRouter);
v2.use('/homes/:homeid/devices', isHomeRecordExist, devicesRouter);

module.exports = v2;
