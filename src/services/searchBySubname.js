const searchBySubname = (devices, subname) => {
  return devices.filter(device => device.name.search(subname) !== -1);
};

module.exports = searchBySubname;
