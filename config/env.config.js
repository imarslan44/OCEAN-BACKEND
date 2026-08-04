import { config } from "dotenv";

config();   

const withHttps = (value) => {
  if (!value) return null;
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
};

const compact = (values) => values.filter(Boolean);
const isProductionLike = process.env.NODE_ENV === "production" || process.env.VERCEL === "1";
const DEFAULT_FRONTEND_ORIGINS = ["https://ocean-v1.vercel.app"];

export const PORT = process.env.PORT || 5000;
export const MONGODB_URI = process.env.MONGODB_URI || (isProductionLike ? "" : "mongodb://127.0.0.1:27017/ocean");

export const JWT_SECRET = process.env.JWT_SECRET || (isProductionLike ? "" : "ocean_fallback_development_secret_key_2026");

export const FRONTEND_ORIGINS = compact([

  ...DEFAULT_FRONTEND_ORIGINS,
  ...(process.env.FRONTEND_ORIGIN || "").split(",").map((origin) => origin.trim()),
  withHttps(process.env.VERCEL_URL),
  withHttps(process.env.VERCEL_PROJECT_PRODUCTION_URL),

  ...(isProductionLike ? [] : ["http://localhost:5173", "http://localhost:3000"])
]);

export const getMissingRequiredEnv = () => {
  if (!isProductionLike) return [];

  return [
    ["JWT_SECRET", JWT_SECRET],
    ["MONGODB_URI", MONGODB_URI]
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);
};

const missingRequiredEnv = getMissingRequiredEnv();

if (missingRequiredEnv.length > 0) {
  console.error(`Missing required production environment variables: ${missingRequiredEnv.join(", ")}`);
}
