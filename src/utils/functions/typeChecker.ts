import {
  ApiBaseResponse,
  ApiDefaultError,
  ApiValidationError,
} from '../../../../server/shared_with_front/types/types-shared';

/**
 * Function checks if object is ApiBaseResponse
 * @param obj : unknown object
 * @returns {boolean}
 */
export const isApiBaseResponse = (obj: any): obj is ApiBaseResponse => {
  if (typeof obj.success === 'boolean' && (obj.message || obj.success)) {
    return true;
  }
  return false;
};

/**
 * Function checks if the proviede object is ApiDefaultError
 * @param obj: any type of object
 * @returns {boolean}
 */
export const isApiDefaultError = (obj: any): obj is ApiDefaultError => {
  // type checking
  if (obj.error && !obj.success) {
    return true;
  }
  return false;
};

export const isApiValidationError = (
  obj: ApiValidationError
): obj is ApiValidationError => {
  if (isApiBaseResponse(obj) && !obj.success && Array.isArray(obj.errors)) {
    return true;
  }
  return false
};
