const updateDeviceById = (devices, id, newDevice) => {
  let wasUpdated = false;

  const updatedDevices = devices.map(device => {
    if (device.id === id) {
      wasUpdated = true;

      return { ...newDevice, id };
    } else {
      return device;
    }
  });

  const response = {
    updatedDevices,
    wasUpdated,
  };

  return response;
};

module.exports = updateDeviceById;
