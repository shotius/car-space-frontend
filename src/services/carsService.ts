import { ICarModel, IFilters } from './../redux/features/auth/types';
import { axios } from 'src/utils/axios';
import { FilterQueries } from 'src/constants';
import { ICar } from '../../../server/shared_with_front/types/types-shared';

const baseURL = '/api/cars';

const searchCars = async () => {
  return await axios.get(`${baseURL}`);
};

const getAllBrands = async () => {
  const { data } = await axios.get(`${baseURL}/brands`);
  return data;
};

const getCars = async ({ params }): Promise<{cars: ICar[], pagesTotal: number}> => {
  const { data } = await axios.get(`${baseURL}`, { params });
  return data as {cars: ICar[], pagesTotal: number};
};

const getSingleCar = async (lotNum: number) => {
  const { data } = await axios.get(`${baseURL}/${lotNum}`);
  return data;
};

const getModels = async (brands: string[]) => {
  const queries = brands.map((b) => `${FilterQueries.BRAND}=${b}`);
  const { data } = await axios.get(`${baseURL}/models?${queries.join('&')}`);
  return data as ICarModel[];
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
    axios.get(`${baseURL}/sales_status`),
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
    salesStatus: results[7].status === 'fulfilled' ? results[7].value.data : [],
    transmissions:
      results[8].status === 'fulfilled' ? results[8].value.data : [],
  };

  return filters;
};

const carsService = {
  searchCars,
  getAllBrands,
  getCars,
  getModels,
  getSingleCar,
  getFilters,
};
export default carsService;
