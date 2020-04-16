const db = require('../../../models');

const addRange = range => {
  const Range = db.range;

  return Range.create(range);
};

module.exports = addRange;
