const express = require('express');

const v1 = require('./v1');
const v2 = require('./v2');
const v3 = require('./v3');

const router = express.Router();

router.use('/v1', v1);
router.use('/v2', v2);
router.use('/v3', v3);

module.exports = router;
