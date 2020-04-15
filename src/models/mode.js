module.exports = (sequelize, Sequelize) => {
  const Mode = sequelize.define('mode', {
    type: {
      type: Sequelize.STRING,
    },
  });

  return Mode;
};
