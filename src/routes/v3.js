const express = require('express');

const { isHomeRecordMongo } = require('../middlewares');

const homesRouterv3 = require('./homesRouterv3');
const devicesRouterv3 = require('./deviceRouterv3');

const v3 = express.Router();

v3.use('/homes', homesRouterv3);
v3.use('/homes/:homeid/devices', isHomeRecordMongo, devicesRouterv3);

module.exports = v3;
