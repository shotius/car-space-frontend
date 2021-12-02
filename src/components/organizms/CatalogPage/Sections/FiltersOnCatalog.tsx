import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { FilterQueries } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getFilters } from 'src/redux/features/auth/carsSlice';
import {
  closeAdvacedFilters,
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
  selectSalesStatus,
  selectTranssmision,
  selectTypes,
  selectYearFrom,
  selectYearTo
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { Transmission } from 'src/redux/features/auth/types';
import { compareTwoArrays } from 'src/utils/functions/compareTwoArrays';
import { parseModelQueries } from 'src/utils/functions/parseModelQueries';
import { submitCarSearch } from 'src/utils/hooks/submitCarsSearch';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';

interface CatalogLIstProps {}

export const FiltersOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { isLargerThan: isLargerThen737 } = useMediaQueryMin(737);
  const query = useQueryParams();
  const dispatch = useAppDispatch();
  const history = useHistory();
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
    ENGINE_TO
  } = FilterQueries;

  const { brands } = useAppSelector((state) => state.selectedCarFilters);
  const filters = useAppSelector((state) => state.selectedCarFilters);

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
    const engineFrom = query.get(ENGINE_FROM)
    if (engineFrom) {
      dispatch(selectEngineFrom(engineFrom))
    }

    const engineTo = query.get(ENGINE_TO)
    if (engineTo) {
      dispatch(selectEnginTo(engineTo))
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

  // apply filters to the url, create new totaly new query string
  // (removes any we had before)
  const onSubmit = () => {
    submitCarSearch({ dispatch, query, history, filters });
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
