const deleteDeviceById = (devices, id) => {
  let wasUpdated = false;

  const updatedDevices = devices.filter(device => {
    if (device.id === id) {
      wasUpdated = true;

      return false;
    } else {
      return true;
    }
  });

  const response = { updatedDevices, wasUpdated };

  return response;
};

module.exports = deleteDeviceById;
