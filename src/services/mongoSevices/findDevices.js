/* eslint-disable indent */
const mongoose = require('mongoose');

const { House } = require('../../models/mongoModels');

const findDevices = async (homeid, type, subname) => {
  const ObjectId = mongoose.Types.ObjectId;
  const subnameCond = subname
    ? {
        $regexMatch: {
          input: '$$devices.name',
          regex: subname,
          options: 'i',
        },
      }
    : {};

  const typeCond = type ? { $eq: ['$$devices.type', type] } : {};

  const house = await House.aggregate([
    { $match: { _id: ObjectId(homeid) } },
    {
      $project: {
        devices: {
          $filter: {
            input: '$devices',
            as: 'devices',
            cond: {
              $and: [subnameCond, typeCond],
            },
          },
        },
        _id: 0,
      },
    },
  ]);

  return house[0].devices;
};

module.exports = findDevices;
