import { Router } from "express";
import { checkrole } from "../middleware/role.js";
import { authmiddleware } from "../middleware/auth.js";
import { cyberauthlogin } from "../controllers/authController/cyberauthlogin.js";
import { cyberauthsignup } from "../controllers/authController/cyberauthsingup.js";
import { cyberauthlogout } from "../controllers/authController/cyberauthlogout.js";

export const cyberauthRoutes = Router();

// POST method for Login
cyberauthRoutes.post("/login", cyberauthlogin);

// POST method for Signup
cyberauthRoutes.post("/signup", cyberauthsignup);

cyberauthRoutes.post("/logout", cyberauthlogout);

cyberauthRoutes.get("/private", authmiddleware, checkrole(["admin"]), (req, res) => { res.json("Welcome admin") });

