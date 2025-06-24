import { cyberProductModels } from "../../models/cyberProductModels.js";

export const productPatch = (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      cyberProductModels.findByIdAndUpdate(id, req.body).then(() => {
        res.status(200).send({
          status: 200,
          message: "Update sucessfully",
        });
      });
    } catch {
      res.status(500).send({
        status: 500,
        message: "Problem",
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      message: "Bad request",
    });
  }
};
