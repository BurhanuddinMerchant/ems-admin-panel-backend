const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ems-admin-panel", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const slotSchema = new mongoose.Schema({
  event_id: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 30,
    required: false,
  },
});
const Slot = mongoose.model("Event", slotSchema);
module.exports = Slot;
