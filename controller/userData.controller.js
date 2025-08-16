const UserData = require("../models/UserData.model");

exports.createUserData = async (req, res) => {
  try {
    const userData = new UserData({
      userId: req.body.userId || "unknown",
      location: req.body.location,
      deviceInfo: req.body.deviceInfo,
      network: req.body.network,
      battery: req.body.battery,
      sensors: req.body.sensors,
      permissions: req.body.permissions,
      biometric: req.body.biometric,
      timestamp: req.body.timestamp || new Date(),
    });

    const saved = await userData.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to save user data" });
  }
};
