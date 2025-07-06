import bcrypt from "bcrypt";
import { cyberauthModels } from "../../models/cyberModels.js"

export const adminloginPost = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Admin data username findOne
        const isUsername = await cyberauthModels.findOne({ username: "admin" });
        const isPassword = await cyberauthModels.findOne({ password: "admin123" })
        if (isUsername) {
            res.status(400).json({
                status: 400,
                message: "Username already exists",
                success: false
            })
            return;
        };

        if (isPassword) {
            res.status(400).json({
                status: 400,
                message: "Password already exists",
                success: false
            })
            return;
        };

        // Admin data username create
        const hashedPassword = await bcrypt.hash(password, 10);
        await cyberauthModels.create({ username, password: hashedPassword }).then(async () => {
            res.status(201).json({
                status: 201,
                message: "Login Created",
                success: true
            });
            return;
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: 500,
            message: "Server Error",
            success: false,
            error: error.message
        });
    };
};
