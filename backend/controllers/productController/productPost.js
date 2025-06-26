import { cyberProductModels } from "../../models/cyberproductModels.js";

export const productPost = (req, res) => {
  const data = req.body;
  cyberProductModels.create(data).then((result) => {
    if (data && data.name && data.description && data.price) {
      try {
        res.status(201).json({
          status: 201,
          message: "Product created successfully",
          data: result,
        });
      } catch (error) {
        console.log("Error creating product", error.message);
      }
    } else {
      res.status(400).json({
        status: 400,
        message: "This have product",
      });
    }
  });
};
