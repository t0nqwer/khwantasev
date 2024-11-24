import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { app } from "./server";
import { env } from "./common/utils/envConfig";

dotenv.config();

// const app: Express = express();
// const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(env.PORT, () => {
  const { NODE_ENV, PORT } = env;
  console.log(`[${NODE_ENV}]: Server is running at http://localhost:${PORT}`);
});
