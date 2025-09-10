import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { cyberauthModels } from "../../models/cyberModels.js";

export const cyberauthprofile = (req, res) => {
dotenv.config();

    try {
        const token = jwt.sign({id: req.params._id}, process.env.JWT_SECURITY_KEY, {expiresIn: "30d"});
        const profileget = cyberauthModels.find().then((users) => {
            if (profileget) {
                res.status(200).json({
                    status: 200,
                    success: true,
                    message: "Profile get successfully",
                    user: users
                })
            } else {
                res.status(400).json({
                    status: 400,
                    success: false,
                    message: "Error occured"
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal server error"
        })
    }
}