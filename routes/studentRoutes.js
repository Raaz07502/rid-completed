const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Message = require("../models/Message");
const Test = require("../models/Test");
// ===== GET Student Messages =====
router.get("/student/messages", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const messages = await Message.find({
      studentId: decoded.userId
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.log("Student Message Fetch Error:", err);
    res.json([]);
  }
});
router.get("/student-dashboard", async (req,res)=>{
 const student = await Student.findById(req.user._id)
   .populate("assignedTests");

 res.render("studentDashboard", { student });
});



router.get("/student/test/:testId", async(req,res)=>{
 const test = await Test.findById(req.params.testId);
 res.render("student_dashboard/studentTestCard",{test});
});

module.exports = router;
