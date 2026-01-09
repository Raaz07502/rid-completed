const User = require("../models/RTSUser");

// 🔹 GET PROFILE
exports.getProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      user
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 🔹 UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { fullName, email, phoneNumber } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { fullName, email, phoneNumber },
      { new: true }
    );

    res.json({
      success: true,
      message: "Profile updated",
      user
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Update failed" });
  }
};
