import { useAppSelector } from './../../redux/app/hook';
import { useHistory } from 'react-router-dom';
import { FilterQueries } from 'src/constants';
import { useAppDispatch } from 'src/redux/app/hook';
import { getDealerCars } from 'src/redux/features/auth/carsSlice';
import { closeAdvacedFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectedCarFilters } from 'src/redux/features/auth/types';
import {
  setCatalogQuery,
  setNetworkError,
} from 'src/redux/features/global/gloabalSlice';
import { deleteQueryFromURL } from '../functions/deleteQueryFromUrl';
import { useMediaQueryMin } from './useMediaQueryMin';
import { useQueryParams } from './useQueryParams';

export const useOnSubmit = () => {
  const query = useQueryParams();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const currPrice = useAppSelector(
    (state) => state.globalAppState.currencyPrice
  );

  const { isLargerThan: isLargerThen737 } = useMediaQueryMin(737);

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
  } = FilterQueries;

  // this function clears the url and fills with new query strings
  async function onSubmit(filters: SelectedCarFilters) {
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
    } = filters;

    // before creating query, i delete all query filters in the url
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

    deleteQueryFromURL({ query, queryName: MODEL }); // remote models
    // clear if there was network error
    dispatch(setNetworkError());

    // put brand values from redux in the url
    if (selectedBrands.length) {
      selectedBrands.map((brand) => {
        query.append(BRAND, brand);
      });
    } else {
      // if there no brand selected remove models from the query
      deleteQueryFromURL({ query, queryName: MODEL }); // remote models
    }

    // if brands exists put model in the url
    if (selectedModels.length) {
      selectedModels.map((item) => {
        item.models.map((model) => {
          query.append(`${MODEL}[${item.brand}]`, model);
        });
      });
    }

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

    history.push({ pathname: '/catalog', search: query.toString() });
    dispatch(getDealerCars(query));

    // save catalog query in redux for caching purpose
    dispatch(setCatalogQuery(query.toString()));

    // save catalog query in redux for caching purpose
    dispatch(setCatalogQuery(query.toString()));

    // if screen is small close advanced filters
    !isLargerThen737 && dispatch(closeAdvacedFilters());
  }

  return onSubmit;
};

export default useOnSubmit;
