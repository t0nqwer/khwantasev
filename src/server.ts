import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { rateLimiter } from "./common/middleware/rateLimiter";
import requestLogger from "./common/middleware/requestLogger";
import morgan from "morgan";

const app: Express = express();

app.set("trust proxy", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(rateLimiter);
app.use(morgan("dev"));

app.use(requestLogger);

//router

export { app };
