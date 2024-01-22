import axios from "axios";

export const fetchPictures = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api';
  const OPTIONS = `q=${query}&page=${page}&key=38417467-04ef37b099f8d5c81e85a4849&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
  return response.data;
};