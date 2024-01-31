import { config } from "dotenv";
import morgan from "morgan";

import express from "express";
import apiRouter from "./routers/apiRouter.js";
import frontendRouter from "./routers/frontend-router.js";

config();
const PORT = process.env.PORT;
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(frontendRouter);
app.use(apiRouter);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});

