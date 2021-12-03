import { axios } from 'src/utils/axios';
import { ICar } from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/users';

const likeCar = async (lN: string) => {
  const result = await axios.post(`${baseUrl}/like`, {lotNumber: lN});
  return result.data;
};

const getAllLikedCars = async () => {
  const result = await axios.get(`${baseUrl}/lots/favourites`)
  return result.data
}

const getAllFavouriteCars = async () => {
  const result = await axios.get(`${baseUrl}/cars/favourites`)
  return result.data as ICar[]
}

export default {
  likeCar,
  getAllLikedCars, 
  getAllFavouriteCars
};
