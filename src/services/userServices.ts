import { axios } from 'src/utils/axios';

const baseUrl = '/api/users';

const likeCar = async (lN: string) => {
  const result = await axios.post(`${baseUrl}/like`, {lotNumber: lN});
  return result.data;
};

const getAllLikedCars = async () => {
  const result = await axios.get(`${baseUrl}/favourites`)
  return result.data
}

export default {
  likeCar,
  getAllLikedCars
};
