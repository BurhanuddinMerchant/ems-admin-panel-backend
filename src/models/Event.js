const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ems-admin-panel", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    default: true,
  },
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
