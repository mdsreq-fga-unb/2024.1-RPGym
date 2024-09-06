import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  activityName: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;
