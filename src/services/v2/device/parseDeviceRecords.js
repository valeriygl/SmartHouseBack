const parseDeviceRecords = records => {
  return records.map(record => {
    let curentMode = '';

    const modes = record.dataValues.modes[0].dataValues.mode_lists.map(mode => {
      if (mode.dataValues.mode_modeList.dataValues.status) {
        curentMode = mode.dataValues.name;
      }

      return mode.dataValues.name;
    });

    const { id, name, status, type, image, ranges } = record.dataValues;

    const { min, max, current, step } = ranges[0].dataValues;

    const oneItem = {
      id,
      name,
      status,
      type,
      image,
      temp: {
        min,
        max,
        current,
        step,
      },
      modes,
      curentMode,
    };

    return oneItem;
  });
};

module.exports = parseDeviceRecords;
