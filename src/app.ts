import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppRoutes } from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 100, // Limit each IP to 100 requests per window
});

const app: Application = express();
app.use(helmet()); // prevent attacks like click-jacking and XSS
app.use(limiter); // limiting api requests
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (_req: Request, res: Response) => {
  res.sendFile("index.html", { root: "public" });
});

app.use("/api/v1", AppRoutes);

app.use(
  globalErrorHandler as (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void
);
app.use(notFound);

export default app;
