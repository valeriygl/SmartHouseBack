module.exports = (sequelize, Sequelize) => {
  const ModeList = sequelize.define('mode_list', {
    modeId: {
      type: Sequelize.INTEGER,
    },
    modeListId: {
      type: Sequelize.INTEGER,
    },
  });

  return ModeList;
};
