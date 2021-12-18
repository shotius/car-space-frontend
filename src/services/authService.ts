import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  LoginParams,
  LoginResponse,
  MeResponse,
  RegisterParams,
  RegisterResponse,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/auth';

const autoLogin = async () => {
  const { data } = await axios.get(`${baseUrl}/me`);
  return data as ApiSuccessResponse<MeResponse>;
};

const login = async (credentials: LoginParams) => {
  const { data } = await axios.post(`${baseUrl}/login`, credentials);
  return data as ApiSuccessResponse<LoginResponse>;
};

const register = async (credentials: RegisterParams) => {
  const { data } = await axios.post(`${baseUrl}/register`, credentials);
  return data as ApiSuccessResponse<RegisterResponse>;
};

const logout = async () => {
  const { data } = await axios.get(`${baseUrl}/logout`);
  return data;
};

const authService = {
  autoLogin,
  login,
  register,
  logout,
};

export default authService;
