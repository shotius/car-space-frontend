import { axios } from 'src/utils/axios';
import { LoginParams } from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/auth';

const autoLogin = async () => {
  const { data } = await axios.get(`${baseUrl}/me`);
  return data;
};

const login = async (credentials: LoginParams) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

const authService = {
  autoLogin,
  login,
};

export default authService;
