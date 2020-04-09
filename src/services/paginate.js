const paginate = (devices, reqPage, perPage) => {
  const devicesLength = devices.length;

  const lastDeviceInd = devicesLength - 1;

  const totalPages = Math.ceil(devicesLength / perPage);

  const page = reqPage > totalPages ? totalPages : reqPage;

  const expFirstInd = page * perPage - perPage;
  const expLastInd = page * perPage - 1;

  const firstInd = expFirstInd < 0 ? 0 : expFirstInd;

  const lastInd = expLastInd > lastDeviceInd ? lastDeviceInd : expLastInd;

  const data = devices.slice(firstInd, lastInd + 1);

  return { data, totalPages, page, perPage };
};

module.exports = paginate;
