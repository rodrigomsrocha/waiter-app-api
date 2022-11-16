import { Router } from 'express';
import { createProduct, listProducts } from '../app/controllers/products.controller';
import { uploadMiddleware } from '../app/middlewares/uploadsMiddleware';

export const router = Router();

router.get('/products', listProducts);

router.post('/products', uploadMiddleware.single('image'), createProduct);
