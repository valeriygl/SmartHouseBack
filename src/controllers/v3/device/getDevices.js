const House = require('../../../models/mongoModels/houseModel');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getDevices = async (req, res, next) => {
  const { id, homeid } = req.params;
  // const house = await House.findById(homeid);
  const house = await House.aggregate([
    { $match: { _id: ObjectId(homeid) } },
    {
      $project: {
        devices: {
          $filter: {
            input: '$devices',
            as: 'devices',
            cond: {
              $regexMatch: {
                input: '$$devices.name',
                regex: 'SO',
                options: 'i',
              },
            },
          },
        },
        _id: 0,
      },
    },
  ]);
  res.json(house);
};

module.exports = getDevices;
