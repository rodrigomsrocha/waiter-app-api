import { Request, Response } from 'express';
import { Category } from '../models/Category';
import { Product } from '../models/Product';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;
    const category = await Category.create({ icon, name });

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({ category: categoryId });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
