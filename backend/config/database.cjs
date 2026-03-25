const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// Support both DB_* (your provided credentials) and MYSQL_* (legacy env vars).
const readEnv = (value) => {
  if (value === undefined || value === null) return undefined;
  const s = String(value).trim();
  return s.length ? s : undefined; // treat "" as "not provided"
};

const host = process.env.DB_HOST ?? process.env.MYSQL_HOST ?? "localhost";
const portRaw = process.env.DB_PORT ?? process.env.MYSQL_PORT;
const port = portRaw ? Number(portRaw) : 3306;

const username =
  process.env.DB_USERNAME ?? process.env.MYSQL_USERNAME ?? process.env.MYSQL_USER;
const password = readEnv(process.env.DB_PASSWORD) ?? readEnv(process.env.MYSQL_PASSWORD);
const database = readEnv(process.env.DB_DATABASE) ?? readEnv(process.env.MYSQL_DATABASE);

if (!username) {
  throw new Error(
    "Missing DB_USERNAME (or MYSQL_USERNAME/MYSQL_USER) for MySQL connection."
  );
}

const sequelizeOptions = {
  dialect: "mysql",
  host,
  port,
  username,
  logging: false,
};

if (password !== undefined) sequelizeOptions.password = password;

// If DB_DATABASE is an empty string, omit it from the connection config.
if (database) sequelizeOptions.database = database;

const sequelize = new Sequelize(sequelizeOptions);

module.exports = sequelize;
