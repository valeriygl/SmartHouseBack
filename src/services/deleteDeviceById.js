const deleteDeviceById = (devices, id) => {
  const updatedDevices = devices.filter(device => device.id !== id);

  return updatedDevices;
};

module.exports = deleteDeviceById;
