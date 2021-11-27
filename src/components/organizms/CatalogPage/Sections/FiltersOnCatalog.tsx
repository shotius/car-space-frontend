import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { FilterQueries } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getCars, getFilters } from 'src/redux/features/auth/carsSlice';
import { selectBrand } from 'src/redux/features/auth/selectedCarFilterSlice';
import { compareTwoArrays } from 'src/utils/functions/compareTwoArrays';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';

interface CatalogLIstProps {}

export const FiltersOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { isLargerThan: isLargerThen737 } = useMediaQueryMin(737);
  const query = useQueryParams();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { BRAND, MODEL, YEAR_FROM, YEAR_TO } = FilterQueries;

  const {
    brands: selectedBrands,
    // models: selectedModels,
    yearFrom,
    yearTo,
  } = useAppSelector((state) => state.selectedCarFilters);

  const { brands } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // Parse query from url
  useEffect(() => {
    // parse selected models from url
    //to-do
    // const queryModels = query.getAll('model');
    // if (!compareTwoArrays(queryModels, models)) {
      // dispatch(selectModels(queryModels));
    // }

    // parse selected brands from url
    const queryBrands = query.getAll('brand');
    // if we dont have brands in the url, remove models as well
    if (!compareTwoArrays(queryBrands, brands)) {
      dispatch(selectBrand(queryBrands));
    }
  }, [query]);

  // get filter options on the load
  useEffect(() => {
    dispatch(getFilters());
  }, []);

  // apply filters to the url, create new totaly new query string
  // (removes any we had before)
  const onSubmit = () => {
    // before creating query, i delete all query filters in the url
    query.delete(BRAND);
    query.delete(MODEL);
    query.delete(YEAR_FROM);
    query.delete(YEAR_TO);

    // put brand values from redux in the url
    if (selectedBrands.length) {
      selectedBrands.map((brand) => {
        query.append(BRAND, brand);
      });
    } else {
      // if there no brand selected remove models from the query
      query.delete(MODEL);
    }

    // if brands exists put model in the url
    // if (selectedBrands.length) {
    //   selectedModels.map((option) => {

    //     query.append(MODEL, model);
    //   });
    // }

    // set year from
    if (yearFrom) {
      query.set(YEAR_FROM, yearFrom);
    }

    // set year to
    if (yearTo) {
      query.set(YEAR_TO, yearTo);
    }

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
