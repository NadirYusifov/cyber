import { cyberproductsModels } from "../../models/cyberModels.js";

export const productPost = (req, res) => {
  const data = req.body;
  cyberproductsModels.create(data).then((result) => {
    if (data && data.name && data.description && data.price) {
      try {
        res.status(201).json({
          status: 201,
          message: "products created successfully",
          data: result,
        });
      } catch (error) {
        console.log("Error creating products", error.message);
      }
    } else {
      res.status(400).json({
        status: 400,
        message: "This have products",
      });
    }
  });
};
