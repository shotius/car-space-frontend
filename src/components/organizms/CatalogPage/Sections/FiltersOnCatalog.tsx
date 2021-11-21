import { Stack } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { useAppDispatch } from 'src/redux/app/hook';
import { getFilters } from 'src/redux/features/auth/carsSlice';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';

interface CatalogLIstProps {}

export const FiltersOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const{ isLargerThan: isLargerThen737} = useMediaQueryMin(737);

  const dispatch = useAppDispatch();

  // get filter options on the load
  useEffect(() => {
    dispatch(getFilters());
  }, []);

  return (
    <Stack spacing="0">
      {/* mobile selects */}
      {!isLargerThen737 ? (
        <MobileFiltersOnCatalogPage />
      ) : (
        <DesktopFiltersOnCatalogPage />
      )}
    </Stack>
  );
};
