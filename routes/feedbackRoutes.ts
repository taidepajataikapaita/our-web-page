import { Router } from 'express';
import type { RequestHandler } from 'express';
import {
  createFeedback,
  getFeedbacks,
  getFeedbackById
} from '../controllers/feedback';

const router = Router();

// Feedback routes
router.post('/', createFeedback as RequestHandler);
router.get('/', getFeedbacks as RequestHandler);
router.get('/:id', getFeedbackById as RequestHandler);

export default router; 