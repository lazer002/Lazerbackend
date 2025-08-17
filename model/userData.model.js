import mongoose from "mongoose";

const MediaItemSchema = new mongoose.Schema(
  {
    id: String,
    uri: String,
    filename: String,
    creationTime: Number,
    type: { type: String, enum: ["photo", "video"] }, // ✅ added type field
  },
  { _id: false }
);

const userDataSchema = new mongoose.Schema({
  userId: { type: String, required: true },

  location: {
    coords: {
      latitude: Number,
      longitude: Number,
      accuracy: Number,
      altitude: Number,
      heading: Number,
      speed: Number,
      altitudeAccuracy: Number,
      speedAccuracy: Number,
    },
    address: String,
    timestamp: Number,
  },

  deviceInfo: {
    brand: String,
    modelName: String,
    osName: String,
    osVersion: String,
    deviceName: String,
    totalMemory: Number,
    freeStorage: Number,
    totalStorage: Number,
    manufacturer: String,
    deviceType: String,
    isDevice: Boolean,
    supportedCpuArchitectures: [String],
    screenWidth: Number,
    screenHeight: Number,
    pixelDensity: Number,
    language: String,
    region: String,
    timezone: String,
    appVersion: String,
    buildNumber: String,
    gpu: String,
  },

  network: {
    isInternetReachable: Boolean,
    type: String,
    isConnected: Boolean,
    ipAddress: String,
    carrier: String,
    signalStrength: Number,
    vpnEnabled: Boolean,
  },

  battery: {
    level: Number,
    state: Number,
    lowPowerMode: Boolean,
    chargingSource: String,
    temperature: Number,
  },

  sensors: {
    accelerometer: {
      x: Number,
      y: Number,
      z: Number,
    },
    gyroscope: {
      alpha: Number,
      beta: Number,
      gamma: Number,
    },
    magnetometer: {
      x: Number,
      y: Number,
      z: Number,
    },
    barometer: Number,
    light: Number,
    proximity: Number,
  },

  permissions: {
    location: String,
    notifications: String,
    camera: String,
    microphone: String,
    media: String, // ✅ added
  },

  biometric: {
    hasHardware: Boolean,
    supportedAuthTypes: [String],
    isEnrolled: Boolean,
    screenLockEnabled: Boolean,
    encryptionEnabled: Boolean,
  },

  session: {
    startTime: Date,
    endTime: Date,
    duration: Number,
    crashes: [String],
    foregroundTime: Number,
    backgroundTime: Number,
  },

  security: {
    isRooted: Boolean,
    isDeveloperMode: Boolean,
  },

  media: {
    photos: [MediaItemSchema],
    videos: [MediaItemSchema],
  },

  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("UserData", userDataSchema);
