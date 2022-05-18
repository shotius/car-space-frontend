import { ICarCopartModel, IFilters } from './../redux/features/auth/types';
import { axios } from 'src/utils/axios';
import { FilterQueries } from 'src/constants';
import {
  ApiSuccessResponse,
  ICarDealer,
} from '../../../server/shared_with_front/types/types-shared';

const baseURL = '/api/dealers/cars';

export interface GetCarsReturnType {
  cars: ICarDealer[];
  pagesTotal: number;
}

const searchCars = async () => {
  return await axios.get(`${baseURL}`);
};

const getAllBrands = async () => {
  const { data } = await axios.get(`${baseURL}/brands`);
  return data;
};

const getRecentCars = async () => {
  const { data } = await axios.get(`${baseURL}/recents`);
  return data as ApiSuccessResponse<ICarDealer[]>;
};

const getDealerCars = async (params: URLSearchParams) => {
  const { data } = await axios.get(`${baseURL}`, { params });
  return data as ApiSuccessResponse<GetCarsReturnType>;
};

const getDealerCarsCount = async (params: URLSearchParams) => {
  const { data } = await axios.get(`${baseURL}/count`, { params });
  return data as ApiSuccessResponse<number>;
};

const getSingleCar = async (lotNum: number) => {
  const { data } = await axios.get(`${baseURL}/${lotNum}`);
  return data;
};

const getModels = async (brands: string[]) => {
  const queries = brands.map((b) => `${FilterQueries.BRAND}=${b}`);
  const { data } = await axios.get(`${baseURL}/models?${queries.join('&')}`);
  return data as ICarCopartModel[];
};

const getFilters = async () => {
  const results = await Promise.allSettled([
    axios.get(`${baseURL}/conditions`),
    axios.get(`${baseURL}/types`),
    axios.get(`${baseURL}/locations`),
    axios.get(`${baseURL}/drives`),
    axios.get(`${baseURL}/fuels`),
    axios.get(`${baseURL}/brands`),
    axios.get(`${baseURL}/cylinders`),
    axios.get(`${baseURL}/transmissions`),
  ]);

  const filters: IFilters = {
    conditions: results[0].status === 'fulfilled' ? results[0].value.data : [],
    types: results[1].status === 'fulfilled' ? results[1].value.data : [],
    location: results[2].status === 'fulfilled' ? results[2].value.data : [],
    drives: results[3].status === 'fulfilled' ? results[3].value.data : [],
    fuels: results[4].status === 'fulfilled' ? results[4].value.data : [],
    brands: results[5].status === 'fulfilled' ? results[5].value.data : [],
    cylinders: results[6].status === 'fulfilled' ? results[6].value.data : [],
    transmissions:
      results[7].status === 'fulfilled' ? results[7].value.data : [],
  };

  return filters;
};

const addDealerCar = async (formData: FormData) => {
  const { data } = await axios.post(`${baseURL}`, formData);
  return data as ApiSuccessResponse<ICarDealer[]>;
};

const getSingleDealerCarThunk = async (carId: string) => {
  const { data } = await axios.get(`${baseURL}/${carId}`);
  return data as ApiSuccessResponse<ICarDealer>;
};

const removeSingleCar = async (carId: string) => {
  const { data } = await axios.delete(`${baseURL}`, {
    data: { id: carId },
  });
  return data as ApiSuccessResponse<string>;
};

const carsService = {
  removeSingleCar,
  addDealerCar,
  searchCars,
  getRecentCars,
  getAllBrands,
  getModels,
  getSingleCar,
  getFilters,
  getDealerCars,
  getSingleDealerCarThunk,
  getDealerCarsCount,
};
export default carsService;
