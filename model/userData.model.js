const mongoose = require("mongoose");

const BatterySchema = new mongoose.Schema({
  level: Number,
  state: Number,
  lowPowerMode: Boolean,
});

const LocationSchema = new mongoose.Schema({
  coords: {
    latitude: Number,
    longitude: Number,
    accuracy: Number,
    altitude: Number,
    heading: Number,
    speed: Number,
  },
  timestamp: Number,
});

const DeviceInfoSchema = new mongoose.Schema({
  brand: String,
  modelName: String,
  osName: String,
  osVersion: String,
  deviceName: String,
  totalMemory: Number,
  manufacturer: String,
  deviceType: String,
  isDevice: Boolean,
  supportedCpuArchitectures: [String],
});

const SensorsSchema = new mongoose.Schema({
  accelerometer: { x: Number, y: Number, z: Number },
  // You can add more sensors here later
});

const BiometricSchema = new mongoose.Schema({
  hasHardware: Boolean,
  supportedAuthTypes: [Number],
  isEnrolled: Boolean,
});

const UserDataSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // optional unique device/user id
  location: LocationSchema,
  deviceInfo: DeviceInfoSchema,
  network: mongoose.Schema.Types.Mixed,
  battery: BatterySchema,
  sensors: SensorsSchema,
  permissions: mongoose.Schema.Types.Mixed,
  biometric: BiometricSchema,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserData", UserDataSchema);
