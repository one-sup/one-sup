import dotenv from "dotenv";

dotenv.config();

export const config = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || undefined,
  DB_PASS: process.env.DB_PASS || undefined,
  DB_NAME: process.env.DB_NAME || "sup_bot",
};
