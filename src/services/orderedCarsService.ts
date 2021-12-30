import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  IOrderedCar,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/ordered-cars/';

const getUserOrderedCars = async (userId: string) => {
  const { data } = await axios.get(`${baseUrl}/user/${userId}`);
  return data as ApiSuccessResponse<IOrderedCar[]>;
};

const orderedCarsService = {
  getUserOrderedCars,
};

export default orderedCarsService;
