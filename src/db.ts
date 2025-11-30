import { DataSource } from "typeorm";
import path from "path";
import CONFIG from "./config";

let modelsPath = CONFIG.PRODUCTION
  ? path.join(process.cwd(), "models", "*.js")
  : path.join(process.cwd(), "src", "models", "*.ts");

const db = new DataSource({
  type: "mysql",
  url: CONFIG.DB_URL,

  synchronize: false,
  dropSchema: false,
  
  entities: [modelsPath],
  poolSize: CONFIG.DB_POOL_SIZE,
  
  ssl: CONFIG.PRODUCTION
    ? {
        rejectUnauthorized: true, // Required for PlanetScale/Cloud SQL
      }
    : false,
});

export default db;