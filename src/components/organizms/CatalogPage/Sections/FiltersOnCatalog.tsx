import { Stack } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getFilters } from 'src/redux/features/auth/carsSlice';
import { selectBrand, selectModels } from 'src/redux/features/auth/selectedCarFilterSlice';
import { compareTwoArrays } from 'src/utils/functions/compareTwoArrays';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';

interface CatalogLIstProps {}

export const FiltersOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const{ isLargerThan: isLargerThen737} = useMediaQueryMin(737);
  const query = useQueryParams()
  const dispatch = useAppDispatch();

  const {models, brands} = useAppSelector(state => state.selectedCarFilters)


  useEffect(() => {
    
    const queryModels =  query.getAll('model')
    const queryBrands = query.getAll('brand')
    if (!compareTwoArrays(queryModels, models)) {
      dispatch(selectModels(queryModels))
    }
    if (!compareTwoArrays(queryBrands, brands)) {
      dispatch(selectBrand(queryBrands))
    }
  }, [query])

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
