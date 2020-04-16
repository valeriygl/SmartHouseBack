const db = require('../models');
const Device = db.device;
const Range = db.range;
const ModeList = db.modeList;
const Mode = db.mode;

// const Op = db.Sequelize.Op;

exports.findAll = async (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const records = await Device.findAll({
    include: [
      { model: Range, attributes: ['min', 'max', 'current', 'step'] },
      {
        model: Mode,

        include: { model: ModeList, attributes: ['name'] },
      },
    ],
  });

  const parsedRecords = records.map(record => {
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

  res.json(parsedRecords);
};
