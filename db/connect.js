import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Godfirst:joshua1212@nodeexpressproject.b2bha.mongodb.net/PayMyEvery?retryWrites=true&w=majority"
  );
  // {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  // }
  console.log("connected");
};

export default connectDB;
