import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  CloudinaryResponse,
  ICarDealer,
  IUser,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/users';

const likeCar = async (carId: string) => {
  const result = await axios.post(`${baseUrl}/like`, { carId });
  return result.data as ApiSuccessResponse<IUser>;
};

const getAllLikedCars = async () => {
  const { data } = await axios.get(`${baseUrl}/favourites/carIds`);
  return data as ApiSuccessResponse<string[]>;
};

const getAllFavouriteCars = async () => {
  const { data } = await axios.get(`${baseUrl}/favourites/cars`);
  return data as ApiSuccessResponse<ICarDealer[]>;
};

const setUserProfileAvatar = async (formdata: FormData) => {
  const { data } = await axios.post(`${baseUrl}/avatar`, formdata);
  return data as ApiSuccessResponse<CloudinaryResponse>;
};

const getUsers = async (searchWord: string) => {
  const { data } = await axios.get(`${baseUrl}?s=${searchWord}`);
  return data as ApiSuccessResponse<IUser[]>;
};

const sendMesage = async (body: any) => {
  const {data} = await axios.post(`${baseUrl}/sendMessage`, body)
  return data as ApiSuccessResponse<boolean>
}

export default {
  getUsers,
  likeCar,
  getAllLikedCars,
  getAllFavouriteCars,
  setUserProfileAvatar,
  sendMesage
};
