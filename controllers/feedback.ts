import { Request, Response } from 'express';
import { Feedback } from '../models/Feedback';

export const createFeedback = async (req: Request, res: Response) => {
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

    const feedbackEntry = new Feedback({
      name,
      email,
      feedback,
    });

    await feedbackEntry.save();
    
    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully',
      data: feedbackEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getFeedbacks = async (req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find()
      .sort({ createdAt: -1 })
      .select('name email feedback createdAt'); // Specify fields to return

    res.status(200).json({
      success: true,
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching messages',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Optional: Add a method to get a single feedback entry
export const getFeedbackById = async (req: Request, res: Response) => {
  try {
    const feedbackEntry = await Feedback.findById(req.params.id);
    
    if (!feedbackEntry) {
      return res.status(404).json({
        success: false,
        message: 'Message not found',
      });
    }

    res.status(200).json({
      success: true,
      data: feedbackEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching message',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}; 