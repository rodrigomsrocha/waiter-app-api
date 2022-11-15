import { Router } from 'express';

export const router = Router();

// list products
router.get('/products', (req, res) => {
  res.send('ok');
});
// create product
router.post('/products', (req, res) => {
  res.send('ok');
});
// get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok');
});
