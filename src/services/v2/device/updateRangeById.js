const db = require('../../../models');

const updateRangeById = (newRange, type, deviceId) => {
  const Range = db.range;

  return Range.update(newRange, { where: { type, deviceId } });
};

module.exports = updateRangeById;
