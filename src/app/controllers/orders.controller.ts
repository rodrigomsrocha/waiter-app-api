import { Request, Response } from 'express';
import { Order } from '../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const products = await Order.find().sort({ createdAt: 1 }).populate('products.product');
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({
      table,
      products,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status))
      return res.status(400).json({ error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE' });

    await Order.findByIdAndUpdate(orderId, { status });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function cancelOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
