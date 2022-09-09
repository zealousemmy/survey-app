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
    required: [true, "must provide network"],
  },
  phone: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "must provide pasword"],
  },
  taken: {
    type: Boolean,
    required: [true, "must provide check"],
    default: false,
  },
  phoneVerificationCode: {
    type: Number,
    minlength: 4,
    maxlenght: 4,
  },
});

const UserInfos =
  mongoose.models.Userinfo || mongoose.model("Userinfo", UserInfoSchema);

export default UserInfos;
