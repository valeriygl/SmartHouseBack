const db = require('../../../models/sqlModels');

const addRange = range => {
  const Range = db.range;

  return Range.create(range);
};

module.exports = addRange;
