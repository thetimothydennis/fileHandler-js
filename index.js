import { config } from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";
import apiRouter from "./routers/apiRouter.js";

config();
const PORT = process.env.PORT;
const app = express();

app.use(express.static(join(__dirname, "client", "dist")));

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(apiRouter);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})

