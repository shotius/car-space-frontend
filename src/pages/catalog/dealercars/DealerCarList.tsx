import { VStack } from '@chakra-ui/layout';
import { Flex, Spinner } from '@chakra-ui/react';
import { DealerCarCard } from 'src/components/molecules/Cards/DealerCarCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { useCatalogPage } from 'src/utils/hooks/useCatalogPage';

interface DealerCarListProps {}

const DealerCarList: React.FC<DealerCarListProps> = () => {
  const { fethingCars, cars, totalPages, page, changePage } = useCatalogPage();

  if (fethingCars) {
    return (
      <VStack h="100vh" w="full">
        <Spinner />
      </VStack>
    );
  }

  return (
    <VStack spacing="90px" w="full">
      {/* car list */}
      {!!cars.length ? (
        <CatalogListWrap gap="16px">
          {cars.map((car, i) => (
            <Flex justify="center" key={i}>
              <DealerCarCard car={car} />
            </Flex>
          ))}
        </CatalogListWrap>
      ) : (
        <HeadingSecondary>No Results found</HeadingSecondary>
      )}

      {/* Pagination` */}
      <Pagination
        totalPages={totalPages}
        activePage={page}
        onPageChange={(num: number) => changePage(num)}
        display={cars.length ? 'flex' : 'none'}
      />
    </VStack>
  );
};

export default DealerCarList;
