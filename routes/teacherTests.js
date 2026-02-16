const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const TeacherTest = require("../models/teacherTestModel");
const ensureTeacher = require("../middleware/authMiddleware");

// ================= CREATE TEST =================
router.post("/api/create-test", ensureTeacher, async (req, res) => {
    try {
        const test = new TeacherTest({
            ...req.body,
            teacher: req.user._id   // ✅ save teacher id
        });

        await test.save();

        res.json({ success: true });
    } catch (err) {
        console.error("Create test error:", err);
        res.json({ success: false });
    }
});

// ================= GET MY TESTS (TEACHER ONLY) =================
router.get("/api/my-tests", ensureTeacher, async (req, res) => {
    try {
        const tests = await TeacherTest.find({
            teacher: req.user._id   // ✅ filter by teacher
        }).sort({ createdAt: -1 });

        res.json(tests);
    } catch (err) {
        console.error("Load teacher tests error:", err);
        res.json([]);
    }
});

// ================= VIEW TEST (TEACHER PREVIEW) =================
router.get("/view/:id", ensureTeacher, async (req, res) => {
    try {
        const testId = req.params.id;

        const test = await TeacherTest.findOne({
            _id: testId,
            teacher: req.user._id   // ✅ security filter
        });

        if (!test) {
            return res.send("Test not found");
        }

        res.render("tracher_deshboard/advance-version/viewtest.ejs", {
            testId: test._id,
            testTitle: test.name,
            questions: test.questions,
            duration: test.duration,
            sid: ""
        });

    } catch (err) {
        console.error("View test error:", err);
        res.send("Server error");
    }
});

// ================= OPEN TEST (STUDENT LINK) =================
router.get("/open/:id", async (req, res) => {
    try {
        const testId = req.params.id;

        const test = await TeacherTest.findById(testId);

        if (!test) {
            return res.send("Test not found");
        }

        res.render("tracher_deshboard/advance-version/sendtestprocess/opentestverify.ejs", {
            testId: test._id,
            testTitle: test.name,
            questions: test.questions,
            duration: test.duration,
            sid: ""
        });

    } catch (err) {
        console.error("Open test error:", err);
        res.send("Server error");
    }
});

// ================= DELETE TEST =================
router.delete("/delete/:id", ensureTeacher, async (req, res) => {
    try {
        const testId = req.params.id;

        await TeacherTest.findOneAndDelete({
            _id: testId,
            teacher: req.user._id   // ✅ only own test
        });

        res.json({ success: true });
    } catch (err) {
        console.error("Delete test error:", err);
        res.json({ success: false });
    }
});

// ================= UPDATE TEST =================
router.put("/update/:id", ensureTeacher, async (req, res) => {
    try {
        const testId = req.params.id;
        const updateData = req.body;

        await TeacherTest.findOneAndUpdate(
            { _id: testId, teacher: req.user._id }, // ✅ filter
            updateData
        );

        res.json({ success: true });
    } catch (err) {
        console.error("Update test error:", err);
        res.json({ success: false });
    }
});

// ================= GET SINGLE TEST API =================
router.get("/api/:id", ensureTeacher, async (req, res) => {
    try {
        const test = await TeacherTest.findOne({
            _id: req.params.id,
            teacher: req.user._id   // ✅ filter
        });

        res.json(test);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// ================= ANALYTICS PAGE =================
router.get("/analytics", ensureTeacher, (req, res) => {
    const testId = req.query.testId;

    res.render("tracher_deshboard/advance-version/sendtestprocess/analytics", {
        testId
    });
});

module.exports = router;
