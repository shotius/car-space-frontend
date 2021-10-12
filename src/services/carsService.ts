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

const carsService = {
  searchCars,
};
export default carsService;
