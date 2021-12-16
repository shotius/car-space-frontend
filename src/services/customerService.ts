import { axios } from "src/utils/axios"
import { ApiSuccessResponse, ICustomerReviewFront, INewReview } from "../../../server/shared_with_front/types/types-shared"

const baseUrl = '/api/customer-reviews'

const getReviews = async () => {
  const {data} = await axios.get(baseUrl)
  return data as ApiSuccessResponse<ICustomerReviewFront[]>
}

const addReview = async (formdata: FormData) => {
  const {data} = await axios.post(baseUrl, formdata)
  return data as ApiSuccessResponse<INewReview>
}

const customerService = {
  getReviews, 
  addReview
}

export default customerService