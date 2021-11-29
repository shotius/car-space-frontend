import { axios } from 'src/utils/axios';

const baseUrl = '/api/cars/images';

const getMediumImages = async (lotNumber: number) => {
  const { data } = await axios.get(`${baseUrl}/medium?lotNumber=${lotNumber}`);
  return data;
};

const getThumbImages = async (lotNumber: number) => {
  const { data } = await axios.get(`${baseUrl}/thumbs?lotNumber=${lotNumber}`);
  return data;
};

export default {
  getMediumImages,
  getThumbImages,
};
