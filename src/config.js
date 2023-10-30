import axios from 'axios';

const API_KEY = '3Kw3hbuBieaTK16LbFj7bCjj5uhPgkR3yh';

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });

    if (response.data.hits) {
      return response.data.hits;
    } else {
      throw new Error('No data found.');
    }
  } catch (error) {
    // Обробка помилок
    console.error('Error fetching images:', error);
    throw error;
  }
};

const api = { fetchImages };

export default api;
