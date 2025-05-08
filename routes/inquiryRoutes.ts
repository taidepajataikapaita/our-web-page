import { Router } from 'express';
import type { RequestHandler } from 'express';
import {
  createInquiry,
  getInquiries,
  getInquiryById
} from '../controllers/inquiry';

const router = Router();

// Inquiry routes
router.post('/', createInquiry as RequestHandler);
router.get('/', getInquiries as RequestHandler);
router.get('/:id', getInquiryById as RequestHandler);

export default router;
