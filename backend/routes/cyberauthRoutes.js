import { Router } from "express";
import { cyberauthlogin } from "../controllers/authController/cyberauthlogin.js";
import { cyberauthsignup } from "../controllers/authController/cyberauthsingup.js";
import { authmiddleware } from "../middleware/auth.js";
import { checkrole } from "../middleware/role.js";

export const cyberauthRoutes = Router();

// POST method for Login
cyberauthRoutes.post("/login", cyberauthlogin);

// POST method for Signup
cyberauthRoutes.post("/signup", cyberauthsignup);

cyberauthRoutes.get("/private", authmiddleware, checkrole(["admin"]), (req, res) => { res.json("Welcome admin") });
