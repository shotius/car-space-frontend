import { IFilters } from './../redux/features/auth/types';
import { axios } from 'src/utils/axios';

axios.defaults.baseURL = '/api/cars';

const searchCars = async () => {
  try {
    const data = await axios.get(`/`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const getAllBrands = async () => {
  try {
    const { data } = await axios.get(`/brands`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getCars = async (page: number) => {
  try {
    const { data } = await axios.get(`?page=${page}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getSingleCar = async (lotNum: string) => {
  try {
    const { data } = await axios.get(`/${lotNum}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const getModels = async (brand: string) => {
  try {
    const { data } = await axios.get(`/models?brand=${brand}`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const getFilters = async () => {
  try {
    const results = await Promise.allSettled([
      axios.get('/conditions'),
      axios.get('/types'),
      axios.get('/locations'),
      axios.get('/drives'),
      axios.get('/fuels'),
      axios.get('/brands'),
      axios.get('/cylinders'),
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
