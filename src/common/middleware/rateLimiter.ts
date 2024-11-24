import type { Request } from "express";
import { rateLimit } from "express-rate-limit";

import { env } from "../utils/envConfig";

export const rateLimiter = rateLimit({
  legacyHeaders: true,
  windowMs: env.COMMON_RATE_LIMIT_WINDOW_MS,
  limit: env.COMMON_RATE_LIMIT_MAX_REQUESTS,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  keyGenerator: (req: Request) => req.ip as string,
});