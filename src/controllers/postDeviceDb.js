const db = require('../models');
const Device = db.device;
const Range = db.range;
const ModeList = db.modeList;
const Mode = db.mode;
const ModeModeList = db.modeModeList;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  // Validate request

  // Create a Tutorial
  const device = {
    name: req.body.name,
    status: req.body.status,
    type: req.body.type,
    image: req.body.image,
    houseId: req.params.homeid,
  };

  const { modes } = req.body;

  const deviceRecord = await Device.create(device);

  const deviceId = deviceRecord.id;

  await Range.create({
    ...req.body.temp,
    type: 'temp',
    deviceId,
  });

  // insert into modeLists
  const modeListRecords = await Promise.all(
    modes.map(async mode =>
      ModeList.findOrCreate({
        where: { name: mode },
        defaults: { name: mode },
      })
    )
  );

  // let currentModeId = null;

  // if (currentMode) {
  //   const condition = { name: { [Op.eq]: currentMode } };

  //   const ModeListRecord = await ModeList.findOne({ where: condition });

  //   currentModeId = ModeListRecord.dataValues.id;
  // }

  //insert into Mode

  const modeRecord = await Mode.create({
    deviceId,
    type: 'default',
  });

  const modeId = modeRecord.id;

  //insert into mode_modeList

  const { currentMode } = req.body;

  await Promise.all(
    modeListRecords.map(async modeListRecord => {
      console.log('modeListRecord :', modeListRecord[0].dataValues);

      const { id, name } = modeListRecord[0].dataValues;

      return ModeModeList.create({
        modeId,
        modeListId: id,
        status: name === currentMode,
      });
    })
  );

  res.send({ id: deviceId, ...req.body });
};
