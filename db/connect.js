import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGO_URI}`);
  // {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  // }
  console.log("connected");
};

export default connectDB;
