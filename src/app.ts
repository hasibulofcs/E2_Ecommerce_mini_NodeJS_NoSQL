import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppRoutes } from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { StatusCodes } from "http-status-codes";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", AppRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    status: StatusCodes.OK,
    message: "Welcome to E-commerce app API",
  });
});

app.use(
  globalErrorHandler as (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void
);
app.use(notFound);

export default app;
