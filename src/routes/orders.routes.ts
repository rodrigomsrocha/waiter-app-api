import { Router } from 'express';

export const router = Router();

// list orders
router.get('/orders', (req, res) => {
  res.send('ok');
});
// create order
router.post('/orders', (req, res) => {
  res.send('ok');
});
// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});
// delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
