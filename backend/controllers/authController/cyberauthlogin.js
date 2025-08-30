import bcrypt from "bcrypt";
import dotenv from "dotenv";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import { cyberauthModels } from "../../models/cyberModels.js";

export const cyberauthlogin = async (req, res) => {
  dotenv.config();

  const { email, password } = req.body;

  const user = await cyberauthModels.findOne({ email });
  if (!user) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "User not found",
    });
  }

  const matchpassword = await bcrypt.compare(password, user.password);
  if (!matchpassword) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "Password is incorrect",
    });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECURITY_KEY,
    { expiresIn: "30d" },
  );

  res.cookie("cybercookie", token, {
    httpOnly: true,
  });

  res.status(200).json({
    token,
    status: 200,
    success: true,
    message: "Authentication",
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};
