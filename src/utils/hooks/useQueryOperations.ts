import { FilterQueries } from 'src/constants';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';
import { SelectedCarModel } from '../../../../server/shared_with_front/types/types-shared';
import { deleteQueryFromURL } from '../functions/deleteQueryFromUrl';

const {
  BRAND,
  MODEL,
  YEAR_FROM,
  YEAR_TO,
  CONDITION,
  TYPE,
  LOCATION,
  TRANSMISSION,
  KEYS,
  DRIVE,
  SALES_STATUS,
  FUEL_TYPE,
  CYLINDER,
  PRICE_FROM,
  PRICE_TO,
  ENGINE_FROM,
  ENGINE_TO,
  CURRENCY_PRICE,
  MOST_DEMAND,
  DEALER_ID,
} = FilterQueries;

export const useQueryOperations = () => {
  function updatedBrandsInQuery(query: URLSearchParams, brands: string[]) {
    if (brands.length) {
      brands.map((brand) => {
        query.append(BRAND, brand);
      });
    } else {
      // if there no brand selected remove models from the query
      deleteQueryFromURL({ query, queryName: MODEL }); // remote models
    }
    return query;
  }

  function updateModelsInQuery(
    query: URLSearchParams,
    models: SelectedCarModel[]
  ) {
    // if brands exists put model in the url
    if (models.length) {
      models.map((item) => {
        item.models.map((model) => {
          query.append(`${MODEL}[${item.brand}]`, model);
        });
      });
    }
    return query
  }

  function clearAllFiltersFromQuery(query: URLSearchParams) {
    query.delete(BRAND);
    query.delete(YEAR_FROM);
    query.delete(PRICE_FROM);
    query.delete(PRICE_TO);
    query.delete(YEAR_TO);
    query.delete(CONDITION);
    query.delete(TYPE);
    query.delete(LOCATION);
    query.delete(TRANSMISSION);
    query.delete(KEYS);
    query.delete(DRIVE);
    query.delete(SALES_STATUS);
    query.delete(FUEL_TYPE);
    query.delete(CYLINDER);
    query.delete(ENGINE_FROM);
    query.delete(ENGINE_TO);
    query.delete(MOST_DEMAND);
    query.delete(DEALER_ID);
    deleteQueryFromURL({ query, queryName: MODEL }); // remote models
    return query
  }

  return {
    updatedBrandsInQuery,
    clearAllFiltersFromQuery,
    updateModelsInQuery,
  };
};
