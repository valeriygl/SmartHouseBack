const filterByType = (devices, type) => {
  const typeLC = type.toLowerCase();

  const filteredDevices = devices.filter(
    device => device.type.toLowerCase() === typeLC
  );

  return filteredDevices;
};

module.exports = filterByType;
