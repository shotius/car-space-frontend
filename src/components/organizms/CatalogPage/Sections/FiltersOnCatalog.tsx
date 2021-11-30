import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { FilterQueries } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getCars, getFilters } from 'src/redux/features/auth/carsSlice';
import {
  closeAdvacedFilters,
  selectBrand,
  selectCarKeys,
  selectConditions,
  selectCylinders,
  selectDrives,
  selectFuels,
  selectLocations,
  selectModels,
  selectSalesStatus,
  selectTranssmision,
  selectTypes,
  selectYearFrom,
  selectYearTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { Transmission } from 'src/redux/features/auth/types';
import { setCatalogQuery, setNetworkError } from 'src/redux/features/global/gloabalSlice';
import { compareTwoArrays } from 'src/utils/functions/compareTwoArrays';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';
import { SelectedCarModel } from '../../../../../../server/shared_with_front/types/types-shared';

interface CatalogLIstProps {}

export const FiltersOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { isLargerThan: isLargerThen737 } = useMediaQueryMin(737);
  const query = useQueryParams();
  const dispatch = useAppDispatch();
  const history = useHistory();
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
  } = FilterQueries;

  const {
    brands: selectedBrands,
    models: selectedModels,
    yearFrom,
    yearTo,
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
  } = useAppSelector((state) => state.selectedCarFilters);

  const { brands } = useAppSelector((state) => state.selectedCarFilters);

  // Parse query from url
  useEffect(() => {
    // parse selected brands from url
    const queryBrands = query.getAll('brand');
    // if we dont have brands in the url, remove models as well
    if (!compareTwoArrays(queryBrands, brands)) {
      dispatch(selectBrand(queryBrands));
    }

    // parse selected models from url
    // finally: unique model qs
    const modelQueryKeys = [
      ...new Set(
        Array.from(query.keys()).filter((q) => q.includes(`${MODEL}[`))
      ),
    ];

    // restore models from url
    const models = parseModelQueries({ brands: queryBrands, modelQueryKeys });
    if (models.length) {
      dispatch(selectModels(models));
    }

    // restore year from url
    const yearFrom = query.get(YEAR_FROM);
    if (yearFrom) {
      dispatch(selectYearFrom(yearFrom));
    }

    const yearTo = query.get(YEAR_TO);
    if (yearTo) {
      dispatch(selectYearTo(yearTo));
    }

    // restore condition from url
    const conditions = query.getAll(CONDITION);
    if (conditions.length) {
      dispatch(selectConditions(conditions));
    }

    // restore types from url
    const types = query.getAll(TYPE);
    if (types.length) {
      dispatch(selectTypes(types));
    }

    // restore drives from url
    const drives = query.getAll(DRIVE);
    if (drives.length) {
      dispatch(selectDrives(drives));
    }

    // restore location from url
    const locations = query.getAll(LOCATION);
    if (locations.length) {
      dispatch(selectLocations(locations));
    }

    // restore transmissions from url
    const transmissions = query.getAll(TRANSMISSION) as Transmission[];
    if (transmissions.length) {
      dispatch(selectTranssmision(transmissions));
    }

    // restore keys from url
    const keys = query.get(KEYS);
    if (keys === 'NO' || keys === 'YES') {
      dispatch(selectCarKeys(keys));
    }

    // restore sales status from url
    const salesStatus = query.getAll(SALES_STATUS);
    if (salesStatus.length) {
      dispatch(selectSalesStatus(salesStatus));
    }

    // restore fuel types
    const fuels = query.getAll(FUEL_TYPE);
    if (fuels.length) {
      dispatch(selectFuels(fuels));
    }

    // restore Cylinders
    const cylinders = query.getAll(CYLINDER);
    if (cylinders.length) {
      dispatch(selectCylinders(cylinders));
    }
  }, [query]);

  // get filter options on the load
  useEffect(() => {
    dispatch(getFilters());
  }, []);

  // remove models from url
  const deleteModelsFromURL = () => {
    Array.from(query.keys()).forEach((q) => {
      if (q.includes(`${MODEL}[`)) {
        query.delete(q);
      }
    });
  };

  // receives list of brands in the url and queries of models
  // returns ready object of selected models to save in redux
  const parseModelQueries = ({
    modelQueryKeys, // all queryString keys for selected models
    brands, // all brands in url
  }: {
    modelQueryKeys: string[];
    brands: string[];
  }) => {
    const resultModelsObj: SelectedCarModel[] = [];

    // Iterate over all brands in the url and fill template object for adding models
    brands.map((brand) => resultModelsObj.push({ brand, models: [] }));

    // iterate over all model query keys and push them in to the models array with brand name
    modelQueryKeys.map((q) => {
      // get brand name from modelQuery string
      const brand = q.slice(q.indexOf('[') + 1, q.indexOf(']'));

      // get all models for specific brand and put in a result
      const modelsOfSpecificBrand = query.getAll(q);
      resultModelsObj.push({ brand, models: modelsOfSpecificBrand });
    });
    // filter empty models
    return resultModelsObj.filter((m) => m.models.length);
  };

  // apply filters to the url, create new totaly new query string
  // (removes any we had before)
  const onSubmit = () => {
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
    deleteModelsFromURL(); // remote models
    // clear if there was network error
    dispatch(setNetworkError());

    // put brand values from redux in the url
    if (selectedBrands.length) {
      selectedBrands.map((brand) => {
        query.append(BRAND, brand);
      });
    } else {
      // if there no brand selected remove models from the query
      deleteModelsFromURL();
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
    dispatch(setCatalogQuery(query.toString()))

    // if screen is small close advanced filters
    !isLargerThen737 && dispatch(closeAdvacedFilters());
  };

  return (
    <>
      {!isLargerThen737 ? (
        <MobileFiltersOnCatalogPage onSubmit={onSubmit} />
      ) : (
        <DesktopFiltersOnCatalogPage onSubmit={onSubmit} />
      )}
    </>
  );
};
