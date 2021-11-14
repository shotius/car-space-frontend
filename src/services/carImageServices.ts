import { axios } from 'src/utils/axios';

const baseUrl = '/api/cars/images';

const getMediumImages = async (lotNumber: string) => {
  try {
    const {data} = await axios.get(`${baseUrl}/medium?lotNumber=${lotNumber}`);
    return data
  } catch (error) {
    throw error;
  }
};

export default {
  getMediumImages,
};
