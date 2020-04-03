const searchBySubname = (devices, subname) => {
  return devices.filter(device => {
    if (device.name.search(subname) != -1) return device;
  });
};

module.exports = searchBySubname;
