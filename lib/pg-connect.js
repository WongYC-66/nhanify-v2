const { PG_PASSWORD, PG_DATABASE, PG_USER, PG_HOST, PG_PORT } = process.env;
const { Client } = require("pg");

const client = new Client({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_HOST || 'localhost',
  port: PG_PORT || 5432,
  database: PG_DATABASE,
});

async function connectDb() {
  try {
    await client.connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.stack);
  }
}

connectDb();

module.exports = client;
