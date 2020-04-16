const findItemById = async (id, Model) => {
  return Model.findByPk(id);
};

module.exports = findItemById;
