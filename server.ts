import dotenv from 'dotenv';
import express, { Express, Request, Response, RequestHandler } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import middleware from './utils/middleware';
import config from './utils/config';
import logger from './utils/logger';
import feedbackRoutes from './routes/feedbackRoutes';

dotenv.config();

const app: Express = express();

// MongoDB connection
const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl)
    .then(() => {
        logger.info('MongoDB connected');
    })
    .catch((err) => {
        logger.error('MongoDB connection error:', err);
    });

// Middleware
app.use(express.json());
app.use(middleware.requestLogger);

// API Routes
app.use('/api/feedback', feedbackRoutes);

// Serve static files from the dist directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/client/dist')));

// Handle client-side routing - serve index.html for all non-API routes
app.get('*', ((req: Request, res: Response) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
}) as RequestHandler);

// Error handling
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

// Start the server
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
