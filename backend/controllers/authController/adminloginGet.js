import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { cyberauthModels } from "../../models/cyberModels.js";

export const adminloginGet = async (req, res) => {
  dotenv.config();
  const { username, password } = req.query;

  try {
    const isUsername = await cyberauthModels.findOne({ username });

    if (!isUsername) {
      res.status(404).json({
        status: 404,
        message: "User not found",
        success: false
      });
      return;
    }

    const passwordcompare = bcrypt.compare(password, isUsername.password);
    if (!passwordcompare) {
      res.status(401).json({
        status: 401,
        message: "Password incorrect",
        success: false
      });
      return;
    }

    const token = jwt.sign({ username: isUsername.username }, process.env.JWT_SECURITY_KEY, { expiresIn: "1h" })

    res.status(200).json({
      status: 200,
      message: "Login successfully",
      success: true,
      token: token
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  };
};
