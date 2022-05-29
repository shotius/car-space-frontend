import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  ITransportDataObject,
} from '../../../server/shared_with_front/types/types-shared';

const baseUrl = '/api/transportation';

async function getTransportationData() {
  const { data } = await axios.get(baseUrl);
  return data as ApiSuccessResponse<ITransportDataObject[]>;
}

async function postBatchTransportation(data: ITransportDataObject[]) {
  const result = await axios.post(`${baseUrl}/batch`, data);
  return result.data as ApiSuccessResponse<string>;
}

const transportaionService = {
  postBatchTransportation,
  getTransportationData
};

export default transportaionService;
