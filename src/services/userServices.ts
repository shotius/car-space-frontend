import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  CloudinaryResponse,
  ICarDealer,
  IMessageBody,
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

const searchUsers = async (searchWord: string) => {
  const { data } = await axios.get(`${baseUrl}/search?s=${searchWord}`);
  return data as ApiSuccessResponse<IUser[]>;
};

const sendMesage = async (body: IMessageBody) => {
  const { data } = await axios.post(`${baseUrl}/sendMessage`, body);
  return data as ApiSuccessResponse<boolean>;
};

const getUsers = async (query: string) => {
  const { data } = await axios.get(`${baseUrl}?${query}`);
  return data as ApiSuccessResponse<{ users: IUser[]; totalPages: number }>;
};

const getDealers = async () => {
  const { data } = await axios.get(`${baseUrl}/dealers`);
  return data as ApiSuccessResponse<IUser[]>;
};

export default {
  getDealers,
  getUsers,
  searchUsers,
  likeCar,
  getAllLikedCars,
  getAllFavouriteCars,
  setUserProfileAvatar,
  sendMesage,
};
