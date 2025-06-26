import { Router } from "express";

export const cyberauthRoutes = Router;

// GET
cyberauthRoutes.get("/", loginGet);
