const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
    dob: {
      type: String,
    },
    profilePicture: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "profile",
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
