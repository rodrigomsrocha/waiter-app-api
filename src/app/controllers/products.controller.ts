import { Request, Response } from 'express';
import { Product } from '../models/Product';

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
