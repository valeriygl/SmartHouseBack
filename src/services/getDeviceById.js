const getDeviceById = (id, devices) => {
  const device = devices.find(devices.id == id);
  return device;
};

module.exports = getDeviceById;
