import { DataSource } from "typeorm";
import path from "path";
import fs from "fs";
import CONFIG from "./config";

const modelsPath = path.join(process.cwd(), "dist", "models", "*.js");

const db = new DataSource({
  type: "mysql",
  url: CONFIG.DB_URL,

  synchronize: true,  // only for first time initialization
  dropSchema: false,

  entities: [modelsPath],
  poolSize: CONFIG.DB_POOL_SIZE,

  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(path.join(process.cwd(), "ca.pem"), "utf8"),
  },
});

export default db;
