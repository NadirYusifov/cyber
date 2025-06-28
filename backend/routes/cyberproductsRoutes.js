import { Router } from "express";
import { productGet } from "../controllers/productController/productGet.js";
import { productPost } from "../controllers/productController/productPost.js";
import { productGetId } from "../controllers/productController/productGetId.js";
import { productPatch } from "../controllers/productController/productPatch.js";
import { productDelete } from "../controllers/productController/productDelete.js";

export const cyberproductsRoutes = Router();

// GET
cyberproductsRoutes.get("/", productGet);
cyberproductsRoutes.get("/:id", productGetId);

// POST
cyberproductsRoutes.post("/", productPost);

// PATCH
cyberproductsRoutes.patch("/:id", productPatch);

// DELETE
cyberproductsRoutes.delete("/:id", productDelete);
