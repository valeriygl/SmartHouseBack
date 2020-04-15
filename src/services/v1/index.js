const paginate = require('./paginate');
const getItemById = require('./getItemById');
const deleteItemById = require('./deleteItemById');
const updateItemById = require('./updateItemById');
const { readFile, writeFile } = require('./fileService');

module.exports = {
  paginate,
  getItemById,
  deleteItemById,
  updateItemById,
  readFile,
  writeFile,
};
