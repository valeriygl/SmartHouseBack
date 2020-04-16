const getBaseDevice = ({ name, status, type, image }, houseId) => {
  const baseDevice = {
    name,
    status,
    type,
    image,
    houseId,
  };

  return baseDevice;
};

module.exports = getBaseDevice;
