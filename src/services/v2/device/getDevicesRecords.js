const db = require('../../../models');
const Device = db.device;
const Range = db.range;
const ModeList = db.modeList;
const Mode = db.mode;

const getDeviceRecords = async (condition, paginationOptions) => {
  const records = await Device.findAll({
    where: { ...condition },
    ...paginationOptions,
    include: [
      { model: Range, attributes: ['min', 'max', 'current', 'step'] },
      {
        model: Mode,

        include: { model: ModeList, attributes: ['name'] },
      },
    ],
  });
  return records;
};

module.exports = getDeviceRecords;
