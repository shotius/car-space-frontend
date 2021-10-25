import { axios } from 'src/utils/axios';

const searchCars = async () => {
  try {
    const data = await axios.get('/api/cars')
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
};

const getAllBrands = async () => {
  try {
    const {data} = await axios.get('/api/cars/brands')
    return data
  } catch (error) {
    throw error
  }
}

const getCars = async () => {
  try {
    const {data} = await axios.get('/api/cars')
    return data
  } catch (error) {
    throw error
  }
}

const getModels = async (brand: string) => {
  try {
    const {data} = await axios.get(`/api/cars/models?brand=${brand}`)
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}

const carsService = {
  searchCars,
  getAllBrands,
  getCars,
  getModels
};
export default carsService;
