import { Router } from 'express';
import { createCategory, listCategories, listProductsByCategory } from '../app/controllers/categories.controller';

export const router = Router();

// list categories
router.get('/categories', listCategories);
// create categories
router.post('/categories', createCategory);
// get product by category
router.get('/categories/:categoryId/products', listProductsByCategory);
