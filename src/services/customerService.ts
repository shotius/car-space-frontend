import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  ICustomerReviewFront,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/customer-reviews';

const getReviews = async () => {
  const { data } = await axios.get(baseUrl);
  return data as ApiSuccessResponse<ICustomerReviewFront[]>;
};

const addReview = async (formdata: FormData) => {
  const { data } = await axios.post(baseUrl, formdata);
  return data as ApiSuccessResponse<ICustomerReviewFront>;
};

const removeReview = async (reviewId: string) => {
  const { data } = await axios.delete(`${baseUrl}/${reviewId}`);
  return data as ApiSuccessResponse<string>;
};
const customerService = {
  getReviews,
  addReview,
  removeReview,
};

export default customerService;
