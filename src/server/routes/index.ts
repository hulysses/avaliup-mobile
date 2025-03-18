import express from "express";
import { googleRouter } from "./google";

export const router = express.Router();

router.use("/google", googleRouter);
