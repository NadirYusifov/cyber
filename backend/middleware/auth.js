import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { cyberauthModels } from "../models/cyberModels.js";

export const authmiddleware = async (req, res, next) => {
  dotenv.config();

  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({
        status: 401,
        message: "No token, access is prohibited",
      });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECURITY_KEY);
    req.user = await cyberauthModels.findById(decoded.id).select("password");
    if (!req.user) {
      res.status(401).json({
        status: 401,
        message: "User not found",
      });
    }

    next();
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "Forbidden",
    });
    return;
  }
};
