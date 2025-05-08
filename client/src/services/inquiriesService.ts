import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export interface InquiryData {
  name: string;
  email: string;
  feedback: string;
}

class InquiriesService {
  private api;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async submitInquiry(data: InquiryData) {
    try {
      const response = await this.api.post('/inquiries', data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to submit inquiry');
      }
      throw error;
    }
  }

  async getAllInquiries() {
    try {
      const response = await this.api.get('/inquiries');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch inquiries');
      }
      throw error;
    }
  }

  async getInquiryById(id: string) {
    try {
      const response = await this.api.get(`/inquiries/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to fetch inquiry');
      }
      throw error;
    }
  }

  async updateInquiry(id: string, data: Partial<InquiryData>) {
    try {
      const response = await this.api.put(`/inquiries/${id}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to update inquiry');
      }
      throw error;
    }
  }

  async deleteInquiry(id: string) {
    try {
      const response = await this.api.delete(`/inquiries/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to delete inquiry');
      }
      throw error;
    }
  }
}

export const inquiriesService = new InquiriesService();