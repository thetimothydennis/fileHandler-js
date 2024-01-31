import { config } from "dotenv";
import { createServer } from "http";
import app from "./index.js";

config();

const PORT = process.env.PORT;

createServer(app).listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})