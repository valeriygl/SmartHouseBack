const searchBySubname = (devices, subname) => {
  return devices.filter(
    device => device.name.toLowerCase().search(subname.toLowerCase()) !== -1
  );
};

module.exports = searchBySubname;
