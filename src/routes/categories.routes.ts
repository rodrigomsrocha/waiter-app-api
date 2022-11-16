import { Router } from 'express';
import { createCategory, listCategories, listProductsByCategory } from '../app/controllers/categories.controller';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/categories/:categoryId/products', listProductsByCategory);
