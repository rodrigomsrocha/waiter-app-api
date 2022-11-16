import { Request, Response } from 'express';
import { Order } from '../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const products = await Order.find().sort({ createdAt: 1 }).populate('products.product');
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500);
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
    res.status(500);
  }
}
