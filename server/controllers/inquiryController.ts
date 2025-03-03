import { Request, Response } from 'express';
import { Inquiry } from '../models/Inquiry';

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { email, username } = req.body;
    
    const inquiry = new Inquiry({
      email,
      username,
    });

    await inquiry.save();
    
    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting inquiry',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}; 