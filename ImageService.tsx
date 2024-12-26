import axios from 'axios';
import { FetchImagesResponse, Image } from '../types/imageTypes';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMG_PER_PAGE = 20;

export const fetchImages = async (searchTerm: string, page: number): Promise<Image[]> => {
  const response = await axios.get<FetchImagesResponse>(
    `${API_URL}?query=${searchTerm}&page=${page}&per_page=${IMG_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
  );
  return response.data.results;
};