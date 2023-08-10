const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    isActive: { type: Boolean, default: true },
    registrationDate: { type: Date, default: Date.now },
    bio: { type: String, maxLength: 200 },
    address: {
      street: { type: String },
      city: { type: String },
      zipCode: { type: String },
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    favoriteNumbers: [{ type: Number }],
    settings: {
      notifications: { type: Boolean, default: true },
      theme: {
        type: String,
        enum: ["light", "dark", "custom"],
        default: "light",
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
