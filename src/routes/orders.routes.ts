import { Router } from 'express';
import { createOrder, listOrders } from '../app/controllers/orders.controller';

export const router = Router();

// list orders
router.get('/orders', listOrders);
// create order
router.post('/orders', createOrder);
// change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});
// delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
