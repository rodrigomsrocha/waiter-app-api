import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router as categoriesRouter } from './routes/categories.routes';
import { router as productsRouter } from './routes/products.routes';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(categoriesRouter);
    app.use(productsRouter);

    app.listen(3001, () => {
      console.log('🚀 server is running at: http://localhost:3001');
    });
    console.log('✅ connected to mongo');
  })
  .catch(() => console.log('⛔ failed to connect to mongo'));
