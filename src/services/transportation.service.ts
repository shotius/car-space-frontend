import { axios } from 'src/utils/axios';
import {
  ApiSuccessResponse,
  IBaseTransportationObject,
  ITransportDataObject
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

async function addOne(transportation: IBaseTransportationObject) {
  const { data } = await axios.post(baseUrl, transportation);
  return data as ApiSuccessResponse<ITransportDataObject>;
}

async function updateById(transportation: ITransportDataObject) {
  const { data } = await axios.put(
    `${baseUrl}/${transportation.id}`,
    transportation
  );
  return data as ApiSuccessResponse<ITransportDataObject>;
}

async function deleteById(id: string) {
  const { data } = await axios.delete(`${baseUrl}/${id}`);
  return data as ApiSuccessResponse<ITransportDataObject>;
}

const transportaionService = {
  postBatchTransportation,
  getTransportationData,
  addOne,
  updateById,
  deleteById,
};

export default transportaionService;
