import { axios } from 'src/utils/axios';
import { LoginParams } from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/auth';

const autoLogin = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/me`);
    return data;
  } catch (error) {
    throw error;
  }
};

const login = async (credentials: LoginParams) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const authService = {
  autoLogin,
  login,
};

export default authService;
