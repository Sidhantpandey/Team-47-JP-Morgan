import dotenv from "dotenv";
import fs from "fs";

// Load environment variables for sequelize-cli.
dotenv.config();

// Kept to match the expected structure; not required for this config.
// eslint-disable-next-line no-unused-vars
const _fs = fs;

const readEnv = (value) => {
  if (value === undefined || value === null) return undefined;
  const s = String(value).trim();
  return s.length ? s : undefined; // treat "" as "not set"
};

const host = process.env.DB_HOST ?? process.env.MYSQL_HOST ?? "127.0.0.1";
const port =
  readEnv(process.env.DB_PORT) ??
  readEnv(process.env.MYSQL_PORT) ??
  "3306";
const username =
  process.env.DB_USERNAME ??
  process.env.MYSQL_USERNAME ??
  process.env.MYSQL_USER;
const password =
  readEnv(process.env.DB_PASSWORD) ?? readEnv(process.env.MYSQL_PASSWORD);
const database =
  readEnv(process.env.DB_DATABASE) ?? readEnv(process.env.MYSQL_DATABASE);

export default {
  development: {
    username,
    password,
    database,
    host,
    port,
    dialect: "mysql",
    timezone: "+00:00",
    dialectOptions: {},
  },

  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    timezone: "+00:00",
    dialectOptions: {},
  },

  production: {
    username,
    password,
    database,
    host,
    port,
    dialect: "mysql",
    timezone: "+00:00",
    dialectOptions: {},
  },
};

