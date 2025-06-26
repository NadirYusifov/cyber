import { cyberProductModels } from "../../models/cyberproductModels.js";

export const productPatch = (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      cyberProductModels.findByIdAndUpdate(id, req.body).then(() => {
        res.status(200).json({
          status: 200,
          message: "Update sucessfully",
        });
      });
    } catch {
      res.status(500).json({
        status: 500,
        message: "Problem",
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "Bad request",
    });
  }
};
