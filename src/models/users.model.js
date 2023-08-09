import mongoose from "mongoose";

const UsersScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
    rol: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("users", UsersScheme);
