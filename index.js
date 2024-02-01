import { config } from "dotenv";
import morgan from "morgan";

import express from "express";
import apiRouter from "./routers/apiRouter.js";
import frontendRouter from "./routers/frontend-router.js";
import authRouter from "./routers/authRouter.js";

config();
const PORT = process.env.PORT;
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(authRouter);
app.use(frontendRouter);
app.use(apiRouter);

export default app;