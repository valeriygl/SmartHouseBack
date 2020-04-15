module.exports = (sequelize, Sequelize) => {
  const Range = sequelize.define(
    'range',
    {
      min: {
        type: Sequelize.INTEGER,
      },
      max: {
        type: Sequelize.INTEGER,
      },
      current: {
        type: Sequelize.INTEGER,
      },
      step: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Range;
};
