import { Request, Response } from 'express';
import { Category } from '../models/Category';

export async function listCategories(req: Request, res: Response) {
  const categories = await Category.find();
  res.status(200).json(categories);
}

export async function createCategory(req: Request, res: Response) {
  const { icon, name } = req.body;
  const category = await Category.create({ icon, name });

  res.status(201).json(category);
}
