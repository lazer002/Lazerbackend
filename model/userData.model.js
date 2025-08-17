import mongoose from "mongoose";

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
    freeStorage: Number,
    totalStorage: Number,
    manufacturer: String,
    deviceType: String,
    isDevice: Boolean,
    supportedCpuArchitectures: [String],
  },

  network: {
    isInternetReachable: Boolean,
    type: String,
    isConnected: Boolean,
    ipAddress: String,
    carrier: String,
    signalStrength: String, // your code sends "check via native"
    vpnEnabled: Boolean,
  },

  battery: {
    level: Number,
    state: Number,
    lowPowerMode: Boolean,
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
  },

  permissions: {
    location: String,
    notifications: String,
    camera: String,
    microphone: String,
    media: String,
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
      },
    ],
    videos: [
      {
        id: String,
        uri: String,
        filename: String,
        creationTime: Number,
      },
    ],
  },

  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("UserData", userDataSchema);
