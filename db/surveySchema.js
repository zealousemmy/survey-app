import mongoose from "mongoose";

const SurveyInfoSchema = new mongoose.Schema({
  gender: {
    type: String,
    trim: true,
    required: [true, "must provide gender"],
  },
  age: {
    type: String,
    trim: true,
    required: [true, "must provide age"],
  },
  education: {
    type: String,
    trim: true,
    required: [true, "must provide education"],
  },
  product: {
    type: String,
    trim: true,
    required: [true, "must provide product"],
  },
  need: {
    type: String,
    trim: true,
    required: [true, "must provide need"],
  },
  ticket: {
    type: String,
    trim: true,
    required: [true, "must provide ticket"],
  },
  social_media: {
    type: String,
    trim: true,
    required: [true, "must provide social_media"],
  },
  social_media_text: {
    type: String,
    trim: true,
    required: [true, "must provide social_media_text"],
  },
  recommendation: {
    type: String,
    trim: true,
    required: [true, "must provide recommendation"],
  },
  employed: {
    type: String,
    trim: true,
    required: [true, "must provide social_media"],
  },
  affliate_program: {
    type: String,
    trim: true,
    required: [true, "must provide social_media_text"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Surveyinfos =
  mongoose.models.Surveyinfo || mongoose.model("Surveyinfo", SurveyInfoSchema);

export default Surveyinfos;
