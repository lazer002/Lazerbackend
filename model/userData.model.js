const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  userId: { type: String, default: "unknown" },

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
    freeMemory: Number,
    manufacturer: String,
    deviceType: String,
    isDevice: Boolean,
    supportedCpuArchitectures: [String],
    supportedABIs: [String],
    supported32BitAbis: [String],
    supported64BitAbis: [String],
  },

  network: {
    isInternetReachable: Boolean,
    type: String,
    isConnected: Boolean,
    ipAddress: String,
    macAddress: String,
    carrier: String,
    signalStrength: String,
    vpnEnabled: Boolean,
  },

  battery: {
    level: Number, // 0–1
    state: Number, // charging, full, unplugged
    lowPowerMode: Boolean,
    charging: Boolean,
    temperature: Number,
    health: String,
  },

  sensors: {
    accelerometer: {
      x: Number,
      y: Number,
      z: Number,
    },
    gyroscope: {
      x: Number,
      y: Number,
      z: Number,
    },
    magnetometer: {
      x: Number,
      y: Number,
      z: Number,
    },
    orientation: {
      alpha: Number,
      beta: Number,
      gamma: Number,
    },
  },

  permissions: {
    location: String,
    notifications: String,
    camera: String,
    microphone: String,
    media: String,
    contacts: String,
    calendar: String,
    sms: String,
    storage: String,
  },

  biometric: {
    hasHardware: Boolean,
    supportedAuthTypes: [String],
    isEnrolled: Boolean,
  },

  media: {
    photos: [
      {
        id: String,
        uri: String,
        filename: String,
        creationTime: Number,
        width: Number,
        height: Number,
        exif: Object, // metadata like GPS, orientation, ISO
      },
    ],
    videos: [
      {
        id: String,
        uri: String,
        filename: String,
        creationTime: Number,
        duration: Number,
        width: Number,
        height: Number,
      },
    ],
  },

  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserData", userDataSchema);
