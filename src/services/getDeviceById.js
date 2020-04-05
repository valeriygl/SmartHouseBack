const getDeviceById = (id, devices) => {
  const device = devices.find(device => device.id == id);
  return device;
};

module.exports = getDeviceById;
