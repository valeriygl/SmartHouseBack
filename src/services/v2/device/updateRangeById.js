const db = require('../../../models');

const Range = db.range;

const updateRangeById = (newRange, type, deviceId) => {
  return Range.update(newRange, { where: { type, deviceId } });
};

module.exports = updateRangeById;
