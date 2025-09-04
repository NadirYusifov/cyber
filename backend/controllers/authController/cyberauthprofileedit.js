import { cyberauthModels } from "../../models/cyberModels.js";

export const cyberauthprofileedit = async (req, res) => {
    const id = req.params.id

    try {
        const updateprofile = await cyberauthModels.findByIdAndUpdate(id, req.body, { new: true })
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