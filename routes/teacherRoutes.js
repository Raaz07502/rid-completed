const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ensureTeacher = require("../middleware/authMiddleware"); // ✅ ADD THIS
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Message = require("../models/Message");
const sendMail = require("../utils/sendMail");
const Test = require("../models/Test");       // ✅ ALSO ADD
const Question = require("../models/Question"); // ✅ ALSO ADD

// ================= DASHBOARD =================
router.get("/teacher-dashboard", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const teacher = await Teacher.findById(decoded.userId);
    if (!teacher) return res.redirect("/login");

    const students = await Student.find({ teacherId: teacher._id });

    res.render("tracher_deshboard/deshboard", { teacher, students });

  } catch (err) {
    console.log("Teacher Dashboard Error:", err);
    res.redirect("/login");
  }
});

// ================= PROFILE UPDATE =================
router.post("/teacher/update-profile", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await Teacher.findByIdAndUpdate(decoded.userId, req.body);

    res.json({ success: true });
  } catch (err) {
    console.log("Profile Update Error:", err);
    res.json({ success: false });
  }
});

// ================= ADD STUDENT =================
router.post("/teacher/add-student", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const newStudent = new Student({
      teacherId: decoded.userId,
      ...req.body
    });

    await newStudent.save();
    res.json({ success: true });

  } catch (err) {
    console.log("Add Student Error:", err);
    res.json({ success: false });
  }
});

// ================= DELETE STUDENT =================
router.delete("/teacher/delete-student/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.log("Delete Student Error:", err);
    res.json({ success: false });
  }
});

// ================= UPDATE STUDENT =================
router.put("/teacher/update-student/:id", async (req, res) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, process.env.JWT_SECRET);

    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true });

  } catch (err) {
    console.log("Update Student Error:", err);
    res.json({ success: false });
  }
});

// ================= SEND MESSAGE =================


// ===== SEND MESSAGE =====
router.post("/teacher/send-message", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save message in DB
    const newMsg = new Message({
      teacherId: decoded.userId,
      studentId: req.body.studentId,
      sender: "teacher",
      text: req.body.text
    });
    await newMsg.save();

    // Get student email
    const student = await Student.findById(req.body.studentId);

    // Send Email (optional)
    await sendMail(
      student.email,
      "New Message From Teacher",
      `Hello ${student.name},\n\n${req.body.text}\n\n- Teacher`
    );

    res.json({ success: true });

  } catch (err) {
    console.log("Send Message Error:", err);
    res.json({ success: false });
  }
});

// ================= GET MESSAGES =================
router.get("/teacher/messages/:studentId", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const messages = await Message.find({
      teacherId: decoded.userId,
      studentId: req.params.studentId
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.log("Get Message Error:", err);
    res.json([]);
  }
});

// ===== GET CONVERSATION LIST =====
// ===== GET Conversation List =====
router.get("/teacher/conversations", async (req,res)=>{
  try{
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // last message per student
    const conversations = await Message.aggregate([
      { $match: { teacherId: new mongoose.Types.ObjectId(decoded.userId) }},
      { $sort: { createdAt: -1 }},
      {
        $group:{
          _id: "$studentId",
          lastMessage: { $first: "$text" },
          lastTime: { $first: "$createdAt" }
        }
      }
    ]);

    // attach student info
    const populated = await Student.populate(conversations,{
      path:"_id",
      select:"name"
    });

    res.json(populated);
  }catch(err){
    console.log("Conversation Load Error:",err);
    res.json([]);
  }
});


// Send Test Logic
// Send Test Page Route
// ================= SEND TEST PAGE =================
router.get("/teacher/send-test-page/:testId", async (req,res)=>{
   try {
      const test = await Test.findById(req.params.testId);
      if (!test) return res.send("Test Not Found");
      res.render("tracher_deshboard/sendTest", { test });
   } catch(err){
      console.log(err);
      res.send("Server Error");
   }
});



router.get("/teacher/my-tests", ensureTeacher, async (req,res)=>{
  const tests = await Test.find({ teacherId: req.user._id });
  res.json(tests);
});
// ================= CREATE TEST =================
router.post("/teacher/create-test", ensureTeacher, async (req,res)=>{
  try {
    const test = await Test.create({
      teacherId: req.user._id,
      title: req.body.title,
      subject: req.body.subject,
      className: req.body.className,
      duration: req.body.duration,
      totalMarks: req.body.totalMarks,
      instructions: req.body.instructions
    });

    for (let q of req.body.questions) {
      await Question.create({
        testId: test._id,
        type: q.type,
        text: q.text,
        options: q.options,
        correctAnswer: q.correctAnswer,
        points: q.points
      });
    }

    res.json({success:true});
  } catch(err){
    console.log("Create Test Error:",err);
    res.json({success:false});
  }
});


module.exports = router;
