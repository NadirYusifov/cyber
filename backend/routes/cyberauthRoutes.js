import { Router } from "express";
import { adminloginGet } from "../controllers/authController/adminloginGet.js";
import { adminloginPost } from "../controllers/authController/adminloginPost.js";

export const cyberauthRoutes = Router();

// GET
cyberauthRoutes.get("/", adminloginGet);

// POST
cyberauthRoutes.post("/", adminloginPost);
