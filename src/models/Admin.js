const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ems-admin-panel", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const adminSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
