import { Router } from 'express';
import { createProduct, listProducts } from '../app/controllers/products.controller';
import { uploadMiddleware } from '../app/middlewares/uploadsMiddleware';

export const router = Router();

// list products
router.get('/products', listProducts);
// create product
router.post('/products', uploadMiddleware.single('image'), createProduct);
