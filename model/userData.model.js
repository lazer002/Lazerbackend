import mongoose from "mongoose";

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
      altitudeAccuracy: Number, // ✅ added
      speedAccuracy: Number,    // ✅ added
    },
    address: { type: String }, // ✅ reverse geocoded
    timestamp: Number,
  },

  deviceInfo: {
    brand: String,
    modelName: String,
    osName: String,
    osVersion: String,
    deviceName: String,
    totalMemory: Number,
    freeStorage: Number, // ✅ added
    totalStorage: Number, // ✅ added
    manufacturer: String,
    deviceType: String,
    isDevice: Boolean,
    supportedCpuArchitectures: [String],
    screenWidth: Number,  // ✅ added
    screenHeight: Number, // ✅ added
    pixelDensity: Number, // ✅ added
    language: String,     // ✅ added
    region: String,       // ✅ added
    timezone: String,     // ✅ added
    appVersion: String,   // ✅ added
    buildNumber: String,  // ✅ added
    gpu: String,          // ✅ added
  },

  network: {
    isInternetReachable: Boolean,
    type: String,
    isConnected: Boolean,
    ipAddress: String,     // ✅ added
    carrier: String,       // ✅ added
    signalStrength: Number, // ✅ added
    vpnEnabled: Boolean,   // ✅ added
  },

  battery: {
    level: Number,
    state: Number,
    lowPowerMode: Boolean,
    chargingSource: String, // ✅ added
    temperature: Number,    // ✅ added
  },

  sensors: {
    accelerometer: {
      x: Number,
      y: Number,
      z: Number,
    },
    gyroscope: {            // ✅ added
      alpha: Number,
      beta: Number,
      gamma: Number,
    },
    magnetometer: {         // ✅ added
      x: Number,
      y: Number,
      z: Number,
    },
    barometer: Number,      // ✅ added (air pressure)
    light: Number,          // ✅ added (ambient brightness)
    proximity: Number,      // ✅ added
  },

  permissions: {
    location: String,
    notifications: String,   // ✅ added
    camera: String,          // ✅ added
    microphone: String,      // ✅ added
  },

  biometric: {
    hasHardware: Boolean,
    supportedAuthTypes: [String],
    isEnrolled: Boolean,
    screenLockEnabled: Boolean, // ✅ added
    encryptionEnabled: Boolean, // ✅ added
  },

  session: {                  // ✅ added
    startTime: Date,
    endTime: Date,
    duration: Number,
    crashes: [String],        // store crash/error logs
    foregroundTime: Number,
    backgroundTime: Number,
  },

  security: {                 // ✅ added
    isRooted: Boolean,
    isDeveloperMode: Boolean,
  },

  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("UserData", userDataSchema);
