import { Request, Response } from 'express';
import { Inquiry } from '../models/Inquiry';

export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { name, email, feedback } = req.body;
    
    // Validate required fields
    if (!name || !email || !feedback) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
      });
    }

    const inquiry = new Inquiry({
      name,
      email,
      feedback,
    });

    await inquiry.save();
    
    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully',
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await Inquiry.find()
      .sort({ createdAt: -1 })
      .select('name email feedback createdAt'); // Specify fields to return

    res.status(200).json({
      success: true,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching messages',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Optional: Add a method to get a single inquiry
export const getInquiryById = async (req: Request, res: Response) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Message not found',
      });
    }

    res.status(200).json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching message',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}; 