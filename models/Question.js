const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: "Test" },
  type: String,
  text: String,
  options: [String],
  correctAnswer: Number,
  points: Number
});

module.exports = mongoose.model("Question", questionSchema);
