import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { cyberauthModels } from "../../models/cyberModels.js";

export const cyberauthsignup = async (req, res) => {
  dotenv.config();

  const { name, email, password } = req.body;
  try {
    const existingUser = await cyberauthModels.findOne({ email });
    if (existingUser) {
      res.status(400).json({
        status: 400,
        success: false,
        messages: "User already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await cyberauthModels.create({ name, email, password: hash });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECURITY_KEY,
      { expiresIn: "30d" },
    );

    res.status(201).json({
      status: 201,
      success: true,
      message: "Success signup",
      token,
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Error",
    });
    console.error(err.message);
  }
};
