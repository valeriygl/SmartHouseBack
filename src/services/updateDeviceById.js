const updateDeviceById = (devices, id, newDevice) => {
  const updatedDevices = devices.map(device =>
    device.id === id ? { ...newDevice, id } : device
  );

  return updatedDevices;
};

module.exports = updateDeviceById;
