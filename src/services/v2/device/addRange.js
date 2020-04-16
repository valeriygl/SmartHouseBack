const db = require('../../../models');

const Range = db.range;

const addRange = range => {
  return Range.create(range);
};

module.exports = addRange;
