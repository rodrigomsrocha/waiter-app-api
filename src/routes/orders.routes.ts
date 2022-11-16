import { Router } from 'express';
import { cancelOrder, changeOrderStatus, createOrder, listOrders } from '../app/controllers/orders.controller';

export const router = Router();

router.get('/orders', listOrders);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', cancelOrder);
