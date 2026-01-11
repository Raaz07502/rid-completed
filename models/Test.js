const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  title: String,
  subject: String,
  className: String,
  duration: Number,
  totalMarks: Number,
  instructions: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Test", testSchema);
