import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  IBanner,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/banners';

const getBanners = async () => {
  const { data } = await axios.get(`${baseUrl}`);
  return data as ApiSuccessResponse<IBanner[]>;
};

const addBanner = async (body: FormData) => {
  const { data } = await axios.post(`${baseUrl}`, body);
  return data as ApiSuccessResponse<IBanner>;
};

const deleteBanner = async (id: string) => {
  const { data } = await axios.delete(`${baseUrl}/${id}`);
  return data as ApiSuccessResponse<boolean>;
};

const bannerService = {
  getBanners,
  addBanner,
  deleteBanner,
};

export default bannerService;
