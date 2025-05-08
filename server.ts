import express from 'express';
import type { Express, RequestHandler, ErrorRequestHandler } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import middleware from './utils/middleware';
import config from './utils/config';
import logger from './utils/logger';
import inquiryRoutes from './routes/inquiryRoutes';

dotenv.config();

const app: Express = express();

// MongoDB connection
const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl)
    .then(() => logger.info('MongoDB connected'))
    .catch((err) => logger.error('MongoDB connection error:', err));

// Middleware
app.use(cors(), bodyParser.json(), middleware.requestLogger);

// API Routes
app.use('/api/inquiries', inquiryRoutes);

// Serve static files from the dist directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/client/dist')));

// Handle client-side routing - serve index.html for all non-API routes
const handleClientRouting: RequestHandler = (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
};

app.get('*', handleClientRouting);

// Error handling
app.use(middleware.unknownEndpoint as unknown as ErrorRequestHandler);
app.use(middleware.errorHandler as unknown as ErrorRequestHandler);

// Start the server
const PORT = config.PORT || 3000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));