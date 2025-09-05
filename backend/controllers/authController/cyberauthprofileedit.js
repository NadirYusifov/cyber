import bcrypt from "bcrypt"
import { cyberauthModels } from "../../models/cyberModels.js";

export const cyberauthprofileedit = async (req, res) => {
    const id = req.params.id
    const { name, email, password } = req.body
    
    try {
        const hash = await bcrypt.hash(password, 10)
        const updateprofile = await cyberauthModels.findByIdAndUpdate(id, { name, email, password: hash }, {new: true})
        if (updateprofile) {
            res.status(202).json({
                status: 202,
                message: "Updated successfully",
                user: updateprofile
            })
        } else {
            res.status(400).json({
                status: 400,
                message: "Error occured"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal server error"
        })
    }
}