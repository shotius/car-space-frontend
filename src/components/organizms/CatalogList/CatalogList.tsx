import { Flex, VStack } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarCard } from 'src/components/molecules/CarCard';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { FilterWrap } from 'src/components/molecules/Wrappers/FilterWrap';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import { getAllBrands, getCars } from 'src/redux/features/auth/carsSlice';
import { ICar } from 'src/redux/features/auth/types';
import { CatalogFilter } from '../CatalogFilter';

interface CatalogLIstProps {}

export const CatalogList: React.FC<CatalogLIstProps> = () => {
  const { isOpen: isFilterOpen, onToggle: toggleFilters } = useDisclosure();

  const dispatch = useAppDispatch();
  const { cars } = useAppSelector((state) => state.carsReducer);
  const { totalPages, activePage } = useAppSelector(
    (state) => state.carsPagination
  );

  useEffect(() => {
    dispatch(getAllBrands());
    dispatch(getCars());
  }, []);

  return (
    <ContainerOuter pt={['4', '6', null, '8', '16']}>
      <VStack w="full" spacing={['66px']}>
        <FilterWrap>
          <CatalogFilter isOpen={isFilterOpen} onToggle={toggleFilters} />
        </FilterWrap>
        <Pagination
          totalPages={totalPages}
          activePage={activePage}
          onChange={(num: number) => dispatch(setActivePage(num))}
        />
        <CatalogListWrap>
          {cars.map((car: ICar, i) => (
            <Flex justify="center" key={i}>
              <CarCard car={car} />
            </Flex>
          ))}
        </CatalogListWrap>
      </VStack>
    </ContainerOuter>
  );
};
