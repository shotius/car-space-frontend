import { useQueryOperations } from './useQueryOperations';
import { useHistory } from 'react-router-dom';
import { FilterQueries } from 'src/constants';
import { useAppDispatch } from 'src/redux/app/hook';
import { getDealerCars } from 'src/redux/features/auth/carsSlice';
import { SelectedCarFilters } from 'src/redux/features/auth/types';
import {
  setCatalogQuery,
  setNetworkError,
} from 'src/redux/features/global/gloabalSlice';
import { deleteQueryFromURL } from '../functions/deleteQueryFromUrl';
import { useAppSelector } from './../../redux/app/hook';
import { useQueryParams } from './useQueryParams';

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

export const useOnSubmit = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const startQuery = useQueryParams().toString();
  const query = useQueryParams();
  const {
    updatedBrandsInQuery,
    clearAllFiltersFromQuery,
    updateModelsInQuery,
  } = useQueryOperations();

  const currPrice = useAppSelector(
    (state) => state.globalAppState.currencyPrice
  );

  function updateQueryString(filters: SelectedCarFilters) {
    const {
      brands: selectedBrands,
      models: selectedModels,
      yearFrom,
      yearTo,
      engineFrom,
      engineTo,
      conditions,
      types,
      locations,
      transmission,
      keys,
      drives,
      salesStatus,
      fuels,
      cylinders,
      priceFrom,
      mostDemand,
      priceTo,
      dealerId,
    } = filters;

    // before creating query, i delete all query filters in the url
    clearAllFiltersFromQuery();

    // clear if there was network error
    dispatch(setNetworkError());

    // update query string by filters
    updatedBrandsInQuery(selectedBrands);
    updateModelsInQuery(selectedModels);

    // set year from
    if (yearFrom) {
      query.set(YEAR_FROM, yearFrom.toString());
    }

    // KEYS
    if (keys) {
      query.set(KEYS, keys);
    }

    // set year to
    if (yearTo) {
      query.set(YEAR_TO, yearTo.toString());
    }

    // set price from
    if (priceFrom) {
      query.set(PRICE_FROM, priceFrom);
    }

    // set pride to
    if (priceTo) {
      query.set(PRICE_TO, priceTo);
    }

    if (engineFrom) {
      query.set(ENGINE_FROM, engineFrom.toString());
    }

    if (engineTo) {
      query.set(ENGINE_TO, engineTo.toString());
    }

    // MOST DEMAND
    if (mostDemand) {
      query.set(MOST_DEMAND, mostDemand + '');
    }

    // DEALER ID
    if (dealerId) {
      query.set(DEALER_ID, dealerId);
    }

    // qurency price
    query.set(CURRENCY_PRICE, currPrice.toString());

    // condition
    conditions.map((c) => {
      query.append(CONDITION, c);
    });

    // TYPES
    types.map((t) => {
      query.append(TYPE, t);
    });

    // location
    locations.map((l) => {
      query.append(LOCATION, l);
    });

    // TRANSMISSION
    transmission.map((t) => {
      query.append(TRANSMISSION, t);
    });

    // SALES STATUS

    salesStatus.map((s) => query.append(SALES_STATUS, s));

    // FUEL TYPE
    fuels.map((f) => query.append(FUEL_TYPE, f));

    // CYLINDERS
    cylinders.map((c) => query.append(CYLINDER, c));

    // DRIVE
    drives.map((d) => query.append(DRIVE, d));

    // we need to see first page on search
    query.set('page', '1');
    return query;
  }

  // this function clears the url and fills with new query strings
  async function onSubmit(filters: SelectedCarFilters) {
    const updatedQuery = updateQueryString(filters);

    console.log('udaptedQuery: ', updatedQuery.toString());

    // if query changed redirect
    if (startQuery !== updatedQuery.toString()) {
      history.push({
        pathname: '/catalog/dealers',
        search: updatedQuery.toString(),
      });
    }

    dispatch(getDealerCars(updatedQuery));

    // save catalog query in redux for caching purpose
    dispatch(setCatalogQuery(updatedQuery.toString()));
  }

  return onSubmit;
};

export default useOnSubmit;
