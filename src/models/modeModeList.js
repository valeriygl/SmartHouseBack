module.exports = (sequelize, Sequelize) => {
  const ModeList = sequelize.define(
    'mode_modeList',
    {
      modeId: {
        type: Sequelize.INTEGER,
      },
      modeListId: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
    },
    { timestamps: false }
  );

  return ModeList;
};
