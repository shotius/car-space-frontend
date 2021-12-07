import { ApiDefaultError } from '../../../../server/shared_with_front/types/types-shared';

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
