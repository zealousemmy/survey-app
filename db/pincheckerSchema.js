import mongoose from "mongoose";

const PinCheckerInfoSchema = new mongoose.Schema({
  user_id: {
    type: String,
    trim: true,
    required: [true, "must provide user_id"],
  },
  pin: {
    type: String,
    trim: true,
    required: [true, "must provide pin"],
  },
});

const PinCheckerinfos =
  mongoose.models.PinCheckerinfo ||
  mongoose.model("Surveyinfo", PinCheckerInfoSchema);

export default PinCheckerinfos;
