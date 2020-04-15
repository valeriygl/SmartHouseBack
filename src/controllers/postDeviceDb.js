const db = require('../models');
const Device = db.device;
const Range = db.range;

exports.create = async (req, res) => {
  // Validate request

  // Create a Tutorial
  const device = {
    name: req.body.name,
    status: req.body.status,
    type: req.body.type,
    image: req.body.image,
    houseId: req.params.homeid,
  };
  const result = {};
  // Save Tutorial in the database
  const deviceRecord = await Device.create(device);

  const rangeRecord = await Range.create({
    ...req.body.temp,
    type: 'temp',
    deviceId: deviceRecord.id,
  });
};
