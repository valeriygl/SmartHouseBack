const { deviceTypes } = require('../../../constants');

const parseBaseDevice = require('./parseBaseDevice');

const parseDeviceRecords = records => {
  return records.map(record => {
    let currentMode = '';

    const modes = record.dataValues.modes[0].dataValues.mode_lists.map(mode => {
      if (mode.dataValues.mode_modeList.dataValues.status) {
        currentMode = mode.dataValues.name;
      }

      return mode.dataValues.name;
    });

    const { id, ranges, type } = record.dataValues;

    let oneItem = parseBaseDevice(record.dataValues);

    oneItem = { ...oneItem, id, modes, currentMode };

    if (type === deviceTypes.OVEN) {
      const { min, max, current, step } = ranges[0].dataValues;

      oneItem = { ...oneItem, temp: { min, max, current, step } };
    }

    return oneItem;
  });
};

module.exports = parseDeviceRecords;
