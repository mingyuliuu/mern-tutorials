const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default: "https://img.icons8.com/bubbles/344/test-account.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Message", userModel);
module.exports = User;