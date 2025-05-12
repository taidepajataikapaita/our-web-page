import axios from 'axios';

export interface FeedbackData {
  name: string;
  email: string;
  feedback: string;
}

export interface FeedbackResponse {
  success: boolean;
  message: string;
  data: FeedbackData | FeedbackData[] | null;
}

const API_URL = import.meta.env.VITE_API_URL || '/api';
const baseUrl = `${API_URL}/feedback`;

// Submit new feedback
export async function submitFeedback(data: FeedbackData): Promise<FeedbackResponse> {
  try {
    const response = await axios.post(baseUrl, data);
    return response.data;
  } catch (error) {
    console.error('Failed to submit feedback:', error);
    throw error;
  }
}

// Fetch all feedback entries
export async function getAllFeedback(): Promise<FeedbackResponse> {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch feedback entries:', error);
    throw error;
  }
}

// Fetch single feedback by ID
export async function getFeedbackById(id: string): Promise<FeedbackResponse> {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch feedback with id ${id}:`, error);
    throw error;
  }
}

// Update feedback
export async function updateFeedback(id: string, data: Partial<FeedbackData>): Promise<FeedbackResponse> {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Failed to update feedback with id ${id}:`, error);
    throw error;
  }
}

// Delete feedback
export async function deleteFeedback(id: string): Promise<FeedbackResponse> {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to delete feedback with id ${id}:`, error);
    throw error;
  }
}

export default {
  submitFeedback,
  getAllFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback
}; 