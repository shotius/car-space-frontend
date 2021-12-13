import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  CloudinaryResponse, ICarDealer, IUser
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/users';

const likeCar = async (carId: string) => {
  const result = await axios.post(`${baseUrl}/like`, { carId });
  return result.data as ApiSuccessResponse<IUser>;
};

const getAllLikedCars = async () => {
  const {data} = await axios.get(`${baseUrl}/favourites/carIds`);
  console.log('data: ', data)
  return data as ApiSuccessResponse<string[]> ;
};

const getAllFavouriteCars = async () => {
  const {data} = await axios.get(`${baseUrl}/favourites/cars`);
  return data as ApiSuccessResponse<ICarDealer[]>;
};

const setUserProfileAvatar = async (formdata: FormData) => {
  const { data } = await axios.post(`${baseUrl}/avatar`, formdata);
  return data as ApiSuccessResponse<CloudinaryResponse>;
};

export default {
  likeCar,
  getAllLikedCars,
  getAllFavouriteCars,
  setUserProfileAvatar,
};
