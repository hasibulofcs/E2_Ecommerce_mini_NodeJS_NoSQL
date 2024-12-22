import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AppRoutes } from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", AppRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Test API");
});

app.use(globalErrorHandler);

export default app;
