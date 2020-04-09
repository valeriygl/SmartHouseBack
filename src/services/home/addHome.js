const { writeFile } = require('../fileService');

const addHome = async (device, house) => {
  try {
    house.push(device);

    const postedDevices = JSON.stringify(house);

    await writeFile(postedDevices);
  } catch (error) {
    console.error(error);
  }
};

module.exports = addHome;
