// controllers/userDataController.ts
const UserData = require("../models/userDataModel");

exports.createUserData = async (req, res) => {
  console.log(req.body);
  try {
    const userData = new UserData({
      userId: req.body.userId || "unknown",
      location: req.body.location || {},
      deviceInfo: req.body.deviceInfo || {},
      network: req.body.network || {},
      battery: req.body.battery || {},
      sensors: req.body.sensors || {},
      permissions: req.body.permissions || {},
      biometric: req.body.biometric || {},
      media: req.body.media || { photos: [], videos: [] },
      session: req.body.session || {},
      security: req.body.security || {},
      timestamp: req.body.timestamp || new Date(),
    });

    const saved = await userData.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error("Failed to save user data:", err);
    res.status(500).json({ success: false, message: "Failed to save user data" });
  }
};
