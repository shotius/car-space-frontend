import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  IBlog,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/blogs';

const getAllBlogs = async () => {
  const { data } = await axios.get(baseUrl);
  return data as ApiSuccessResponse<IBlog[]>;
};

const getBlogById = async (id: string) => {
  const result = await axios.get(`${baseUrl}/${id}`);
  return result.data as ApiSuccessResponse<IBlog>;
};

const getRandomBlogs = async (limit: number | void) => {
  const result = await axios.get(`${baseUrl}/random`, { params: { limit } });
  return result.data as ApiSuccessResponse<IBlog[]>;
};

const createBlog = async (blog: FormData) => {
  const result = await axios.post(baseUrl, blog);
  return result.data as ApiSuccessResponse<IBlog>;
};

const deleteBlogById = async (id: string) => {
  const result = await axios.delete(`${baseUrl}/${id}`);
  return result.data as ApiSuccessResponse<IBlog>;
};

const updateBlogById = async (blog: FormData) => {
  const id = blog.get('id');
  const result = await axios.put(`${baseUrl}/${id}`, blog);
  return result.data as ApiSuccessResponse<IBlog>;
};
const blogServices = {
  getAllBlogs,
  getBlogById,
  createBlog,
  deleteBlogById,
  updateBlogById,
  getRandomBlogs,
};

export default blogServices;
