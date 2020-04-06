const getItemById = (id, items) => {
  const item = items.find(item => item.id == id);
  return item;
};

module.exports = getItemById;
