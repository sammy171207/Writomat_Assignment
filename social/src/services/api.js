import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const getAnalyticsData = async (analyticsId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analytics/${analyticsId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    throw error;
  }
};
