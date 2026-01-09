const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile
} = require("../controllers/profileController");

router.get("/profile/:userId", getProfile);
router.put("/profile/:userId", updateProfile);

module.exports = router;
