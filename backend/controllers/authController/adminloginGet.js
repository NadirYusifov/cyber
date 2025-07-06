import bcyrpt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { cyberauthModels } from "../../models/cyberModels.js";

export const adminloginGet = async (req, res) => {
  dotenv.config();

  const { username, password } = req.body;
  try {
    const isUsername = await cyberauthModels.findOne({ username: "admin" });

    if (isUsername) {
      bcyrpt.compare(password, isUsername.password, (error, result) => {
        if (result) {
          const token = jwt.sign({ username: isUsername.username }, process.env.JWT_SECURITY_KEY, { expiresIn: "1h" })
          res.status(200).json({
            status: 200,
            message: "Login successfully",
            success: true,
            token: token
          })
        } else {
          res.status(401).json({
            status: 401,
            message: "Unauth",
            success: false
          });
        };
      });
    };
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "error",
      error: error.message,
    });
  };
};
