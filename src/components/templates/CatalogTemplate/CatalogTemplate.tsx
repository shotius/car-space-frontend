import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BannerCard } from 'src/components/molecules/Cards/BannerCard';
import { FilterWrap } from 'src/components/molecules/Wrappers/FilterWrap';
import { CarListOnCatalogPage } from 'src/components/organizms/CatalogPage/CarListOnCatalogPage';
import { FiltersOnCatalogPage } from 'src/components/organizms/CatalogPage/FiltersOnCatalog';
import { PublicLayout } from '../Layouts/PublicLayout';

interface CatalogTemplateProps {}

export const CatalogTemplate: React.FC<CatalogTemplateProps> = () => {
  return (
    <PublicLayout>
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
    </PublicLayout>
  );
};
