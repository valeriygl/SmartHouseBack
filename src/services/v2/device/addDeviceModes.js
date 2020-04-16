const db = require('../../../models');

const ModeList = db.modeList;

const addDeviceModes = modes => {
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
