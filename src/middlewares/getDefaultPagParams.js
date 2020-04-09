const getDefaulPagPamas = (req, res, next) => {
  const params = { page: 1, perPage: 8 };

  const { page, perPage } = req.query;

  if (page) {
    params.page = Number(page);
  }

  if (perPage) {
    params.perPage = Number(perPage);
  }

  req.query.page = params.page;
  req.query.perPage = params.perPage;

  next();
};

module.exports = getDefaulPagPamas;
