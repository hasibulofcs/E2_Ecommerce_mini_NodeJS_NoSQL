import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";
import "colors";

async function main() {
  try {
    const dbConnection = await mongoose.connect(config.database_url as string);
    console.log(`Connected to database: ${dbConnection.connection.host}`.green);

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`.magenta);
    });
  } catch (e) {
    console.error("An error has occurred in hte server", e);
  }
}

main();
