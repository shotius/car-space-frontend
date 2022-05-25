import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { DesktopFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/DesktopFilters';
import { MobileFiltersOnCatalogPage } from 'src/components/molecules/FilterSelects/MobileFilters';
import { FilterWrap } from 'src/components/molecules/Wrappers/FilterWrap';
import { useAppDispatch } from 'src/redux/app/hook';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';
import { useCatalogPage } from 'src/utils/hooks/useCatalogPage';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { useParseCatalogQuery } from 'src/utils/hooks/useParseCatalogQuery';

interface CatalogLIstProps {}

export const FiltersOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { isLargerThan: isLargerThen737 } = useMediaQueryMin(737);
  const { parseQueries } = useParseCatalogQuery();
  const { query } = useCatalogPage();

  // Parse query from url
  useEffect(() => {
    parseQueries();
  }, [query]);

  return (
    <VStack w="full" alignItems="flex-end">
      <FilterWrap>
        {!isLargerThen737 ? (
          <MobileFiltersOnCatalogPage />
        ) : (
          <DesktopFiltersOnCatalogPage />
        )}
      </FilterWrap>
      <ResetButton />
    </VStack>
  );
};

const ResetButton = () => {
  const dispatch = useAppDispatch();

  return (
    <TextButton
      display={['none', null, 'block']}
      _hover={{ textDecoration: 'underline' }}
      pr="4"
      onClick={() => {
        dispatch(setCatalogQuery(''));
        dispatch(resetFilters());
      }}
    >
      reset all filters
    </TextButton>
  );
};
