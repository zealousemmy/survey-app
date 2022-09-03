import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "must provide email"],
  },
  phone: {
    type: String,
    trim: true,
    required: [true, "must provide pasword"],
  },
  check: {
    type: Boolean,
    default: false,
  },
});

const UserInfos =
  mongoose.models.Userinfo || mongoose.model("Userinfo", UserInfoSchema);

export default UserInfos;
