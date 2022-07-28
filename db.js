//accessing db
import pg from "pg";
const { Pool } = pg;

//local db for dev mode
let localPoolConfig = {
  user: "postgres",
  password: "saurabh161228*",
  host: "localhost",
  port: "5432",
  database: "jwtdb",
};

//for production mode
const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : localPoolConfig;

const pool = new Pool(poolConfig);
export default pool;
