import { config } from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";
import apiRouter from "./routers/apiRouter.js";
import frontendRouter from "./routers/frontend-router.js";

config();
const PORT = process.env.PORT;
const app = express();

app.use(morgan("dev"))

// frontend routing
// root route
// const static_path = join(__dirname, "client", "dist", "index.html")
// app.use(express.static(static_path));


app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(frontendRouter);
app.use(apiRouter);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})

