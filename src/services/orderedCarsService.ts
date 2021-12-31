import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  INewOrderCar,
  IOrderedCar,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/ordered-cars/';

const getUserOrderedCars = async (userId: string) => {
  const { data } = await axios.get(`${baseUrl}/user/${userId}`);
  return data as ApiSuccessResponse<IOrderedCar[]>;
};

const addOrder = async (props: INewOrderCar) => {
  const { data } = await axios.post(`${baseUrl}`, props);
  return data as ApiSuccessResponse<IOrderedCar>;
};

const deleteOrder = async (carid) => {
  const { data } = await axios.delete(`${baseUrl}/${carid}`);
  return data as ApiSuccessResponse<boolean>;
};

const orderedCarsService = {
  deleteOrder,
  getUserOrderedCars,
  addOrder,
};

export default orderedCarsService;
