import express from 'express';
import { createInquiry, getInquiries } from '../controllers/inquiryController';

const router = express.Router();

router.post('/', createInquiry);
router.get('/', getInquiries);

export default router; 