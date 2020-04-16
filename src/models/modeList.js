module.exports = (sequelize, Sequelize) => {
  const ModeList = sequelize.define(
    'mode_list',
    {
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    { timestamps: false }
  );

  return ModeList;
};
