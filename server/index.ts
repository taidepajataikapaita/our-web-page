// index.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { createInquiry, getInquiries, getInquiryById } from './controllers/inquiryController';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define route handler types
type RouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any> | void;

// Wrap async handlers to properly handle errors
const asyncHandler = (fn: RouteHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// API Routes
app.post('/api/inquiries', asyncHandler(createInquiry));
app.get('/api/inquiries', asyncHandler(getInquiries));
app.get('/api/inquiries/:id', asyncHandler(getInquiryById));

// Health check route
app.get('/', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'API is running',
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});