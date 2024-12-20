import express, { Application, Request, Response } from "express";
import config from "./app/config";
import cors from "cors";

const app: Application = express();
const port = config.port || 3000;
app.use(express.json());
app.use(cors());

console.log(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World I am from app!");
});

export default app;
