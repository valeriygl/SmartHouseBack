const deleteItemById = (Items, id) => {
  let wasUpdated = false;

  const updatedItems = Items.filter(Item => {
    if (Item.id === id) {
      wasUpdated = true;

      return false;
    } else {
      return true;
    }
  });

  const response = { updatedItems, wasUpdated };

  return response;
};

module.exports = deleteItemById;
