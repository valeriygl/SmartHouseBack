const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const deviceSchema = new Schema(
  {
    name: String,
    status: Boolean,
    type: String,
    image: String,
    temp: {
      min: Number,
      max: Number,
      current: Number,
      step: Number,
    },
    modes: [String],
    currentMode: String,
  },
  { versionKey: false }
);

const Device = Model('device', deviceSchema);

module.exports = { deviceSchema, Device };
