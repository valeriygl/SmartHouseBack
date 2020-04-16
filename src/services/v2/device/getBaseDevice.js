const getBaseDevice = ({ name, status, type, image }) => {
  const baseDevice = {
    name,
    status,
    type,
    image,
  };

  return baseDevice;
};

module.exports = getBaseDevice;
