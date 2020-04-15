module.exports = (sequelize, Sequelize) => {
  const Device = sequelize.define('device', {
    name: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    type: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
  });

  return Device;
};
