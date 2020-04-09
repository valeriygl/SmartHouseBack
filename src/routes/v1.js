const express = require('express');

const { isHomeExist } = require('../middlewares');

const homesRouter = require('./homesRouter');
const devicesRouter = require('./devicesRouter');

const v1 = express.Router();

v1.use('/homes', homesRouter);
v1.use('/homes/:homeid/devices', isHomeExist, devicesRouter);

module.exports = v1;
