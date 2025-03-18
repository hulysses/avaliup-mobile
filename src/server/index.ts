import express from "express";
import helmet from "helmet";
import { router } from "./routes";

const server = express();
server.use(helmet());
server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

const port = 3000;

server.use("/", router);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
