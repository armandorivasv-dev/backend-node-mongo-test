import dotenv from "dotenv";
dotenv.config();

export const config = {
  app: {
    port: process.env.PORT || 0,
    host: process.env.HOST || 0,
    debug: process.env.DEBUG || false,
  },
  api: {
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  },
  database: {
    dbUrlLocal: process.env.DB_URL_LOCAL || "",
    dbUrlAtlas: process.env.DB_URL_ATLAS || "",
  },
};
