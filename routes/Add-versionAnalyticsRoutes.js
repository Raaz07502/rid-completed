const express = require("express");
const router = express.Router();
const ensureTeacher = require("../middleware/authMiddleware");

const TeacherTest = require("../models/teacherTestModel");
const TestAttempt = require("../models/TestAttempt");
const Student = require("../models/Student");

// ===============================
// GET ALL TEST ANALYTICS CARDS
// ===============================
router.get("/tests-summary", ensureTeacher, async (req, res) => {
    try {
        // ✅ only current teacher tests
        const tests = await TeacherTest.find({
            teacher: req.user._id
        });

        const result = [];

        for (const test of tests) {
            const attempts = await TestAttempt.find({ testId: test._id });

            const totalStudents = attempts.length;

            let avgScore = 0;
            let lastTime = "-";

            if (totalStudents > 0) {
                const totalScore = attempts.reduce(
                    (sum, a) => sum + (a.score || 0),
                    0
                );
                avgScore = Math.round(totalScore / totalStudents);

                // latest submission time
                const latest = attempts.sort(
                    (a, b) => new Date(b.submittedAt) - new Date(a.submittedAt)
                )[0];

                if (latest && latest.submittedAt) {
                    lastTime = new Date(latest.submittedAt).toLocaleString();
                }
            }

            result.push({
                testId: test._id,
                testName: test.name,
                subject: test.subject,
                students: totalStudents,
                avgScore,
                lastTime
            });
        }

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

/* =========================================================
   STUDENT RANKING DETAILS (TIME BASED RANKING)
========================================================= */
router.get(
  "/api/teacher/analytics/test/:testId/details",
  ensureTeacher,
  async (req, res) => {
    try {
        const { testId } = req.params;

        // ✅ ensure test belongs to teacher
        const test = await TeacherTest.findOne({
            _id: testId,
            teacher: req.user._id
        });

        if (!test) {
            return res.json([]);
        }

        const attempts = await TestAttempt.find({ testId })
            .populate("studentId", "name email roll parentContact")
            .sort({ score: -1, submittedAt: 1 });

        const result = attempts.map((a, index) => ({
            rank: index + 1,
            name: a.studentId?.name || "N/A",
            email: a.studentId?.email || "-",
            roll: a.studentId?.roll || "-",
            parentContact: a.studentId?.parentContact || "-",
            marks: a.score || 0,
            status: a.score >= 33 ? "Passed" : "Failed"
        }));

        res.json(result);
    } catch (err) {
        console.error("Analytics Details Error:", err);
        res.json([]);
    }
});

module.exports = router;
