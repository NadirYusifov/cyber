import { Router } from "express";
import { productGet } from "../controllers/productController/productGet.js";
import { productPost } from "../controllers/productController/productPost.js";
import { productGetId } from "../controllers/productController/productGetId.js";
import { productPatch } from "../controllers/productController/productPatch.js";
import { productDelete } from "../controllers/productController/productDelete.js";

export const cyberProductsRouter = Router();

// GET
cyberProductsRouter.get("/", productGet);
cyberProductsRouter.get("/:id", productGetId);

// POST
cyberProductsRouter.post("/", productPost);

// PATCH
cyberProductsRouter.patch("/:id", productPatch);

// DELETE
cyberProductsRouter.delete("/:id", productDelete);
