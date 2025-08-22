import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export const authmiddleware = async (req, res, next) => {
  dotenv.config();

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({
      status: 401,
      message: "No token, access is prohibited",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECURITY_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "Forbidden",
    });
    return;
  }
};

export const requireadmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    res.status(403).json({
      status: 403,
      message: "Admin access only",
    });
    return;
  }
  next();
};
