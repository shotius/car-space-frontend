import { useEffect } from 'react';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getFilters } from 'src/redux/features/auth/carsSlice';
import { useCatalogPage } from 'src/utils/hooks/useCatalogPage';

import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { useParseCatalogQuery } from 'src/utils/hooks/useParseCatalogQuery';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';

interface CatalogLIstProps {}

export const FiltersOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { isLargerThan: isLargerThen737 } = useMediaQueryMin(737);
  const brands = useAppSelector((state) => state.carsReducer.brands);
  const {cars} = useCatalogPage()

  const query = useQueryParams();
  const dispatch = useAppDispatch();
  const { parseQueries } = useParseCatalogQuery();

  // Parse query from url
  useEffect(() => {
    parseQueries();
  }, [query]);

  // Get car filters
  useEffect(() => {
    if (!brands.length && cars.length) {
      dispatch(getFilters());
    }
  }, [brands]);

  return (
    <>
      {!isLargerThen737 ? (
        <MobileFiltersOnCatalogPage />
      ) : (
        <DesktopFiltersOnCatalogPage />
      )}
    </>
  );
};
