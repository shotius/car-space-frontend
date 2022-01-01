import { ChangePasswordProps } from 'src/redux/features/auth/types';
import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  IUser,
  LoginParams,
  IUserInfo,
  RegisterParams,
  RegisterResponse,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/auth';

const me = async () => {
  const { data } = await axios.get(`${baseUrl}/me`);
  return data as ApiSuccessResponse<IUserInfo>;
};

const login = async (credentials: LoginParams) => {
  const { data } = await axios.post(`${baseUrl}/login`, credentials);
  return data as ApiSuccessResponse<IUserInfo>;
};

const register = async (credentials: RegisterParams) => {
  const { data } = await axios.post(`${baseUrl}/register`, credentials);
  return data as ApiSuccessResponse<RegisterResponse>;
};

const logout = async () => {
  const { data } = await axios.get(`${baseUrl}/logout`);
  return data;
};

const forgetPassword = async (email: string) => {
  const { data } = await axios.post(`${baseUrl}/forgot-password`, { email });
  return data as ApiSuccessResponse<string>;
};

const changePassword = async (props: ChangePasswordProps) => {
  const { data } = await axios.post(`${baseUrl}/change-password`, { ...props });
  return data as ApiSuccessResponse<IUser>;
};

const authService = {
  me,
  login,
  register,
  logout,
  forgetPassword,
  changePassword,
};

export default authService;
