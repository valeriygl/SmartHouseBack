const writeFile = require('./writeFile');
const { storePath } = require('../config');

const addHome = async (device, house) => {
  try {
    house.push(device);

    const postedDevices = JSON.stringify(house);

    await writeFile(storePath, postedDevices);
  } catch (error) {
    console.error(error);
  }
};

module.exports = addHome;
