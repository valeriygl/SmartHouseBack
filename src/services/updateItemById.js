const updateItemById = (items, id, newItem) => {
  let wasUpdated = false;

  const updatedItems = items.map(item => {
    if (item.id === id) {
      wasUpdated = true;

      return { ...item, ...newItem };
    } else {
      return item;
    }
  });

  const response = {
    updatedItems,
    wasUpdated,
  };

  return response;
};

module.exports = updateItemById;
