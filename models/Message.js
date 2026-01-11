const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  sender: { type: String, enum:["teacher","student"] },
  text: String
},{ timestamps:true });

module.exports = mongoose.model("Message", messageSchema);
