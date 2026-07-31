import { config } from "dotenv";

config();   

export const PORT = process.env.PORT || 5000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ocean";
export const JWT_SECRET = process.env.JWT_SECRET || "ocean_fallback_development_secret_key_2026";
export const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "";

if (!process.env.JWT_SECRET && process.env.NODE_ENV === "production") {
  console.error("FATAL: JWT_SECRET environment variable is not defined in production mode!");
  process.exit(1);
}

if (!process.env.MONGODB_URI && process.env.NODE_ENV === "production") {
  console.error("FATAL: MONGODB_URI environment variable is not defined in production mode!");
  process.exit(1);
}

if (!process.env.FRONTEND_ORIGIN && process.env.NODE_ENV === "production") {
  console.error("FATAL: FRONTEND_ORIGIN environment variable is not defined in production mode!");
  process.exit(1);
}
