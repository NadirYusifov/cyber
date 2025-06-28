import { cyberproductsModels } from "../../models/cyberModels.js";

export const productDelete = async (req, res) => {
  const { id } = req.params;
  await cyberProductModels.findOneAndDelete(req.params.id).then(() => {
    res.status(200).json({
      status: 200,
      message: "Delete sucessfully",
    });
  });
};
