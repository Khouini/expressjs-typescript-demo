import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import logger from "./utils/logger";
import routes from "./routes";
import errorResponseHandler from "./middleware/errorResponseHandler";

const port = config.get<number>("port");

const app = express();

app.use(express.json());
routes(app);
app.use(errorResponseHandler);

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
});
