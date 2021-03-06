const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

mongoose.connect("mongodb://127.0.0.1:27017/ems-admin-panel", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const adminSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address!!");
      }
    },
  },
  password: {
    required: true,
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("name")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});

adminSchema.methods.toJSON = function () {
  const admin = this;
  const adminObject = admin.toObject();
  delete adminObject.password;
  delete adminObject.tokens;
  return adminObject;
};

//generate an auth token when the user logs in
adminSchema.methods.generateAuthToken = async function () {
  const admin = this;
  const token = jwt.sign({ _id: admin._id.toString() }, "pulzion2020");

  admin.tokens = admin.tokens.concat({ token });
  try {
    await admin.save();
  } catch (e) {
    console.log(e);
  }
  return token;
};

// login user
adminSchema.statics.findByCredentials = async (email, password) => {
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return admin;
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
