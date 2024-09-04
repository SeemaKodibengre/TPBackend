const mongoose = require("mongoose");
const { Schema } = mongoose;

const examlocationSchema = new Schema({
  currentlocation: {
    type: String,
    required: true,
  },
  location1: {
    district: { type: String, required: true },
    examdate: { type: Date, required: true },
    examtime: { type: Date, required: true },
  },
  location2: {
    district: { type: String, required: true },
    examdate: { type: Date, required: true },
    examtime: { type: Date, required: true },
  },
  location3: {
    district: { type: String, required: true },
    examdate: { type: Date, required: true },
    examtime: { type: Date, required: true },
  },
});

module.exports = mongoose.model("examlocation", examlocationSchema);
