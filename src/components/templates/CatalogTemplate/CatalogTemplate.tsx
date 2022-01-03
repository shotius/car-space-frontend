import { VStack } from '@chakra-ui/layout';
import { useEffect } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BannerCard } from 'src/components/molecules/Cards/BannerCard';
import { FilterWrap } from 'src/components/molecules/Wrappers/FilterWrap';
import { CarListOnCatalogPage } from 'src/components/organizms/CatalogPage/Sections/CarListOnCatalogPage';
import { FiltersOnCatalogPage } from 'src/components/organizms/CatalogPage/Sections/FiltersOnCatalog';
import { useAppDispatch } from 'src/redux/app/hook';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';

interface CatalogTemplateProps {}

export const CatalogTemplate: React.FC<CatalogTemplateProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, []);
  
  return (
    <ContainerOuter pt={['4', '6', null, '8']}>
      <VStack w="full" spacing={['66px']}>
        {/* filters */}
        <FilterWrap>
          <FiltersOnCatalogPage />
        </FilterWrap>

        {/* Banner  */}
        <BannerCard />

        {/* car list */}
        <CarListOnCatalogPage />
      </VStack>
    </ContainerOuter>
  );
};
