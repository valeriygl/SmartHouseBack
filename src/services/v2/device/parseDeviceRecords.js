const parseDeviceRecords = records => {
  return records.map(record => {
    let curentMode = '';
    const modes = record.dataValues.modes[0].dataValues.mode_lists.map(mode => {
      if (mode.dataValues.mode_modeList.dataValues.status) {
        curentMode = mode.dataValues.name;
      }
      return mode.dataValues.name;
    });
    const oneItem = {
      id: record.dataValues.id,
      name: record.dataValues.name,
      status: record.dataValues.status,
      type: record.dataValues.type,
      image: record.dataValues.image,
      temp: {
        min: record.dataValues.ranges[0].dataValues.min,
        max: record.dataValues.ranges[0].dataValues.max,
        current: record.dataValues.ranges[0].dataValues.current,
        step: record.dataValues.ranges[0].dataValues.step,
      },
      modes,
      curentMode,
    };
    return oneItem;
  });
};

module.exports = parseDeviceRecords;
