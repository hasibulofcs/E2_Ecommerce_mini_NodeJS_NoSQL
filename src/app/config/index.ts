import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const port = process.env.PORT;
const database_username = process.env.DATABASE_USERNAME;
const database_password = process.env.DATABASE_PASSWORD;
const database_name = process.env.PRODUCTS_DATABASE;
const database_url = process.env
  .DATABASE_URL!.replace("<USERNAME>", encodeURIComponent(database_username!))
  .replace("<PASSWORD>", encodeURIComponent(database_password!))
  .replace("<DATABASE_NAME>", encodeURIComponent(database_name!));

export default {
  port,
  database_url,
  database_username,
  database_password,
};
