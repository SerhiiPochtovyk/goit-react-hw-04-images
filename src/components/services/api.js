import axios from 'axios';

const API_KEY = '39809199-e4207359de0c1fdcee2eb8a85';

const fetchImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

const api = { fetchImages }; 

export default api; 
