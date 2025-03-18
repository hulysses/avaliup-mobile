import { RequestHandler } from "express";

export const notFoundReqest: RequestHandler = (req, res) => {
  res.status(404).json({ error: "Not Found" });
};
