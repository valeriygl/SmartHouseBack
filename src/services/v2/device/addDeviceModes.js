const db = require('../../../models');

const addDeviceModes = modes => {
  const ModeList = db.modeList;

  return Promise.all(
    modes.map(async mode =>
      ModeList.findOrCreate({
        where: { name: mode },
        defaults: { name: mode },
      })
    )
  );
};

module.exports = addDeviceModes;
