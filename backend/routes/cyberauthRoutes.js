import { Router } from "express";
import { cyberauthlogin } from "../controllers/authController/cyberauthlogin.js";
import { cyberauthsignup } from "../controllers/authController/cyberauthsingup.js";
import { authmiddleware, requireadmin } from "../middleware/auth.js";

export const cyberauthRoutes = Router();

// POST method for Login
cyberauthRoutes.post("/login", cyberauthlogin);

// POST method for Signup
cyberauthRoutes.post("/signup", cyberauthsignup);

cyberauthRoutes.get("/private", authmiddleware, requireadmin, (req, res) => {
  res.json("Welcome admin");
});
