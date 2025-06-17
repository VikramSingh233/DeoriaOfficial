// import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// export async function connect() {
//     try {
//         mongoose.connect(process.env.MONGO_URL);
//         const coonection = mongoose.connection;
//         coonection.on("connected", () => {
//             console.log("Database Connection Successfull");
//         })
//         coonection.on("error", (err) => {
//             console.log("Database Connection Failed", err);;
//             process.exit();
//         })
//     } catch (error) {
//         console.log("Database Connection Failed", error);
//     }
// }



// src/dbconfig/dbconfig.js

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URL;

if (!MONGODB_URI) {
  throw new Error("❌ MONGO_URL is not defined in environment variables.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      console.log("✅ MongoDB connected successfully");
      return mongoose;
    }).catch(err => {
      console.error("❌ MongoDB connection error:", err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
