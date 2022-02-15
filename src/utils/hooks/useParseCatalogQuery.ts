import {
  selectBrand,
  selectCarKeys,
  selectConditions,
  selectCylinders,
  selectDrives,
  selectEngineFrom,
  selectEnginTo,
  selectFuels,
  selectLocations,
  selectModels,
  selectPriseFrom,
  selectPriseTo,
  selectSalesStatus,
  selectTranssmision,
  selectTypes,
  selectYearFrom,
  selectYearTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { Transmission } from 'src/redux/features/auth/types';
import { compareTwoArrays } from 'src/utils/functions/compareTwoArrays';
import { parseModelQueries } from 'src/utils/functions/parseModelQueries';
import { FilterQueries } from 'src/constants';
import { HasKeys } from '../../../../server/shared_with_front/contants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { useQueryParams } from './useQueryParams';

const {
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
  ENGINE_FROM,
  ENGINE_TO,
  PRICE_FROM,
  PRICE_TO,
} = FilterQueries;

export const useParseCatalogQuery = () => {
  const query = useQueryParams();
  const dispatch = useAppDispatch();

  const selectedBrands = useAppSelector(
    (state) => state.selectedCarFilters.brands
  );
  const parseQueries = () => {
    // parse selected brands from url
    const queryBrands = query.getAll('brand');
    // if we dont have brands in the url, remove models as well
    if (!compareTwoArrays(queryBrands, selectedBrands)) {
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
    const models = parseModelQueries({
      brands: queryBrands,
      modelQueryKeys,
      query,
    });

    if (models.length) {
      dispatch(selectModels(models));
    }

    // restore year from url
    const yearFrom = query.get(YEAR_FROM);
    if (yearFrom) {
      dispatch(selectYearFrom(parseInt(yearFrom)));
    }

    const yearTo = query.get(YEAR_TO);
    if (yearTo) {
      dispatch(selectYearTo(parseInt(yearTo)));
    }

    // restore engine from url
    const engineFrom = query.get(ENGINE_FROM);
    if (engineFrom) {
      dispatch(selectEngineFrom(engineFrom));
    }

    const engineTo = query.get(ENGINE_TO);
    if (engineTo) {
      dispatch(selectEnginTo(engineTo));
    }

    //PRICE
    const priceFrom = query.get(PRICE_FROM);
    if (priceFrom) {
      dispatch(selectPriseFrom(priceFrom));
    }

    const priceTo = query.get(PRICE_TO);
    if (priceTo) {
      dispatch(selectPriseTo(priceTo));
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
    if (keys === HasKeys.NO || keys === HasKeys.YES) {
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
  };

  return { parseQueries };
};
