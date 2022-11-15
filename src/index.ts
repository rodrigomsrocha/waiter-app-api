import express from 'express';
import mongoose from 'mongoose';
import { router as categoriesRouter } from './routes/categories.routes';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(categoriesRouter);

    app.listen(3001, () => {
      console.log('🚀 server is running at: http://localhost:3001');
    });
    console.log('✅ connected to mongo');
  })
  .catch(() => console.log('⛔ failed to connect to mongo'));
