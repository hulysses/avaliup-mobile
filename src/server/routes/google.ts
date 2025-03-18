import express from "express";

export const googleRouter = express.Router();

googleRouter.post("/", (req, res) => {
  res.send("Hello Google!");
});
