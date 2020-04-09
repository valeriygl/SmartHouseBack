const getDefaulPagPamas = (page, perPage) => {
  const params = { page: 1, perPage: 8 };

  if (page) {
    params.page = Number(page);
  }

  if (perPage) {
    params.perPage = Number(perPage);
  }

  return params;
};

module.exports = getDefaulPagPamas;
