const mongoose = require('mongoose');

const { deviceSchema } = require('./deviceModel');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const houseSchema = new Schema(
  {
    name: String,
    devices: [deviceSchema],
  },
  { versionKey: false }
);

const House = Model('house', houseSchema);

module.exports = House;
