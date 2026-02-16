const express = require("express");
const router = express.Router();
const ensureTeacher = require("../middleware/authMiddleware");

const TestAttempt = require("../models/TestAttempt");
const Student = require("../models/Student");
const TeacherTest = require("../models/teacherTestModel");

const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");

/* =========================================================
   🔹 STUDENT RANKING DETAILS (TABLE DATA)
   ========================================================= */
router.get(
  "/api/teacher/analytics/test/:testId/details",
  ensureTeacher,
  async (req, res) => {
    try {
      const { testId } = req.params;

      // ✅ Check test belongs to teacher
      const test = await TeacherTest.findOne({
        _id: testId,
        teacher: req.user._id
      });

      if (!test) {
        return res.json([]);
      }

      const attempts = await TestAttempt.find({ testId })
        .populate("studentId", "name email roll parentContact")
        .sort({ score: -1 });

      const result = attempts.map((a, index) => ({
        rank: index + 1,
        name: a.studentId?.name || "N/A",
        email: a.studentId?.email || "-",
        roll: a.studentId?.roll || "-",
        parentContact: a.studentId?.parentContact || "-",
        marks: a.score || 0,
        status: a.score >= 33 ? "Pass" : "Fail"
      }));

      res.json(result);
    } catch (err) {
      console.error("Analytics Details Error:", err);
      res.json([]);
    }
  }
);


/* =========================================================
   🔹 EXPORT AS EXCEL
   ========================================================= */
router.get(
  "/api/teacher/analytics/test/:testId/export/excel",
  ensureTeacher,
  async (req, res) => {
    try {
      const { testId } = req.params;

      // ✅ Check ownership
      const test = await TeacherTest.findOne({
        _id: testId,
        teacher: req.user._id
      });

      if (!test) {
        return res.status(403).send("Unauthorized");
      }

      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet("Student Analytics");

      sheet.columns = [
        { header: "Rank", key: "rank", width: 10 },
        { header: "Name", key: "name", width: 25 },
        { header: "Email", key: "email", width: 30 },
        { header: "Roll", key: "roll", width: 15 },
        { header: "Parent", key: "parent", width: 20 },
        { header: "Marks", key: "marks", width: 10 },
        { header: "Status", key: "status", width: 10 }
      ];

      const attempts = await TestAttempt.find({ testId })
        .populate("studentId", "name email roll parentContact")
        .sort({ score: -1 });

      attempts.forEach((a, index) => {
        sheet.addRow({
          rank: index + 1,
          name: a.studentId?.name || "",
          email: a.studentId?.email || "",
          roll: a.studentId?.roll || "",
          parent: a.studentId?.parentContact || "",
          marks: a.score || 0,
          status: a.score >= 33 ? "Pass" : "Fail"
        });
      });

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=student-analytics.xlsx"
      );

      await workbook.xlsx.write(res);
      res.end();
    } catch (err) {
      console.error("Excel Export Error:", err);
      res.status(500).send("Excel Export Failed");
    }
  }
);

/* =========================================================
   🔹 EXPORT AS PDF
   ========================================================= */
router.get(
  "/api/teacher/analytics/test/:testId/export/pdf",
  ensureTeacher,
  async (req, res) => {
    try {
      const { testId } = req.params;

      // ✅ Check ownership
      const test = await TeacherTest.findOne({
        _id: testId,
        teacher: req.user._id
      });

      if (!test) {
        return res.status(403).send("Unauthorized");
      }

      const doc = new PDFDocument({ size: "A4", margin: 30 });

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=student-analytics.pdf"
      );

      doc.pipe(res);

      doc.fontSize(18).text("Student Ranking (Analytics)", {
        align: "center"
      });
      doc.moveDown(1.5);

      let y = 120;
      const rowHeight = 20;

      const attempts = await TestAttempt.find({ testId })
        .populate("studentId", "name email roll parentContact")
        .sort({ score: -1 });

      doc.fontSize(10);

      attempts.forEach((a, index) => {
        doc.text(
          `${index + 1}. ${a.studentId?.name || "-"} | Marks: ${a.score || 0}`,
          40,
          y
        );
        y += rowHeight;
      });

      doc.end();
    } catch (err) {
      console.error("PDF Export Error:", err);
      res.status(500).send("PDF Export Failed");
    }
  }
);

module.exports = router;
