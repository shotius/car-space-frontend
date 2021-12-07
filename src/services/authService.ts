import { axios } from 'src/utils/axios';
import { LoginParams, SessionUser } from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/auth';

const autoLogin = async ():Promise<Omit<SessionUser, "id">>  => {
  const { data } = await axios.get(`${baseUrl}/me`);
  return data as Omit<SessionUser, "id">;
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
