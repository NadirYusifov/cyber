import { Router } from 'express';
import { productGet } from '../controllers/productGet.js';
import { productPost } from '../controllers/productPost.js';
import { productGetId } from '../controllers/productGetId.js';

export const cyberProductsRouter = Router();

cyberProductsRouter.get('/', productGet);
cyberProductsRouter.get('/:id', productGetId);

// POST
cyberProductsRouter.post('/', productPost);