import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { FilterQueries } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getCars, getFilters } from 'src/redux/features/auth/carsSlice';
import {
  selectBrand,
  selectModels,
  selectYearFrom,
  selectYearTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
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
  } = FilterQueries;

  const {
    brands: selectedBrands,
    models: selectedModels,
    yearFrom,
    yearTo,
    conditions,
    types,
    locations,
    transsmision,
    keys,
    drives,
    salesStatus,
    fuels,
    cylinders,
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
    const modelQueryKeys = Array.from(query.keys()).filter((q) =>
      q.includes(`${MODEL}[`)
    );
    const models = parseModelQueries({ brands: queryBrands, modelQueryKeys });
    if (models.length) {
      dispatch(selectModels(models));
    }

    const yearFrom = query.get(YEAR_FROM);
    if (yearFrom) {
      dispatch(selectYearFrom(yearFrom));
    }

    const yearTo = query.get(YEAR_TO);
    if (yearTo) {
      dispatch(selectYearTo(yearTo));
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
    modelQueryKeys,
    brands,
  }: {
    modelQueryKeys: string[];
    brands: string[];
  }) => {
    const newModels: SelectedCarModel[] = [];

    // fill models only with brands specified in the url
    // if in the url we have models and not brands, we don't save these models in redux
    brands.forEach((brand) => newModels.push({ brand, models: [] }));

    // iterate over all model query keys and push them in to the models array
    modelQueryKeys.forEach((q) => {
      const brand = q.slice(q.indexOf('[') + 1, q.indexOf(']'));
      newModels.map((obj) => {
        if (obj.brand === brand) {
          const model = query.get(q);
          if (model) {
            obj.models.push(model);
          }
        }
      });
    });
    return newModels;
  };

  // apply filters to the url, create new totaly new query string
  // (removes any we had before)
  const onSubmit = () => {
    // before creating query, i delete all query filters in the url
    query.delete(BRAND);
    query.delete(YEAR_FROM);
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
    transsmision.map((t) => {
      query.append(TRANSMISSION, t);
    });

    // SALES STATUS

    salesStatus.map((s) => query.append(SALES_STATUS, s));

    // FUEL TYPE
    fuels.map((f) => query.append(FUEL_TYPE, f))

    // CYLINDERS
    cylinders.map(c => query.append(CYLINDER, c))

    // DRIVE
    drives.map((d) => query.append(DRIVE, d));

    // we need to see first page on search
    query.set('page', '1');

    history.push({ pathname: '/catalog', search: query.toString() });
    dispatch(getCars(query));
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
