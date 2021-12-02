import { FilterQueries } from 'src/constants';
import { getCars } from 'src/redux/features/auth/carsSlice';
import {
  setCatalogQuery,
  setNetworkError,
} from 'src/redux/features/global/gloabalSlice';
import { deleteQueryFromURL } from '../functions/deleteQueryFromUrl';

export const submitCarSearch = ({ query, dispatch, history, filters }) => {
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
    priceTo,
  } = filters;

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
  } = FilterQueries;

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
  query.delete(ENGINE_FROM)
  query.delete(ENGINE_TO)

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
    query.set(YEAR_FROM, yearFrom);
  }

  // KEYS
  if (keys) {
    query.set(KEYS, keys);
  }

  // set year to
  if (yearTo) {
    query.set(YEAR_TO, yearTo);
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
    query.set(ENGINE_FROM, engineFrom)
  }

  if (engineTo) {
    query.set(ENGINE_TO, engineTo)
  }

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
  dispatch(getCars(query));

  // save catalog query in redux for caching purpose
  dispatch(setCatalogQuery(query.toString()));

  // save catalog query in redux for caching purpose
  dispatch(setCatalogQuery(query.toString()));
};
