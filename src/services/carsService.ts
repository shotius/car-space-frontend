import { IFilters } from './../redux/features/auth/types';
import { axios } from 'src/utils/axios';

const baseURL = '/api/cars';

const searchCars = async () => {
  try {
  } catch (error) {
    return await axios.get(`${baseURL}`);
    throw error;
  }
};

const getAllBrands = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/brands`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getCars = async (page: number) => {
  try {
    const { data } = await axios.get(`${baseURL}?page=${page}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getSingleCar = async (lotNum: string) => {
  try {
    const { data } = await axios.get(`${baseURL}/${lotNum}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getModels = async (brand: string) => {
  try {
    const { data } = await axios.get(`${baseURL}/models?brand=${brand}`);
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const getFilters = async () => {
  try {
    const results = await Promise.allSettled([
      axios.get(`${baseURL}/conditions`),
      axios.get(`${baseURL}/types`),
      axios.get(`${baseURL}/locations`),
      axios.get(`${baseURL}/drives`),
      axios.get(`${baseURL}/fuels`),
      axios.get(`${baseURL}/brands`),
      axios.get(`${baseURL}/cylinders`),
      axios.get(`${baseURL}/sales_status`),
    ]);

    const filters: IFilters = {
      conditions:
        results[0].status === 'fulfilled' ? results[0].value.data : [],
      types: results[1].status === 'fulfilled' ? results[1].value.data : [],
      location: results[2].status === 'fulfilled' ? results[2].value.data : [],
      drives: results[3].status === 'fulfilled' ? results[3].value.data : [],
      fuels: results[4].status === 'fulfilled' ? results[4].value.data : [],
      brands: results[5].status === 'fulfilled' ? results[5].value.data : [],
      cylinders: results[6].status === 'fulfilled' ? results[6].value.data : [],
      salesStatus:
        results[7].status === 'fulfilled' ? results[7].value.data : [],
    };

    return filters;
  } catch (error) {
    throw error;
  }
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
