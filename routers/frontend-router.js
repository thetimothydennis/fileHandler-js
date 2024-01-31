// package imports
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { appRoute } from "../controllers/frontend-controller.js";

const router = express.Router();

// stores __dirname for use within ES6 modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// static middleware for serving the frontend
router.use(express.static(join(__dirname, "..", "client", "dist")));

router.get("/app", appRoute);

export default router;