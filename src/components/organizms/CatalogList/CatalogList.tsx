import { Flex, VStack } from '@chakra-ui/layout';
import { Spinner, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BannerCard } from 'src/components/molecules/BannerCard';
import { CarCard } from 'src/components/molecules/Cards/CarCard';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { FilterWrap } from 'src/components/molecules/Wrappers/FilterWrap';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import { getAllBrands, getCars } from 'src/redux/features/auth/carsSlice';
import { ICar } from 'src/redux/features/auth/types';
import { useQueryRarams } from 'src/utils/hooks/useQueryParams';
import { CatalogFilter } from '../Modals/CatalogFilter';

interface CatalogLIstProps {}

export const CatalogList: React.FC<CatalogLIstProps> = () => {
  const { isOpen: isFilterOpen, onToggle: toggleFilters } = useDisclosure();
  const { cars, fethingCars } = useAppSelector((state) => state.carsReducer);
  const { activePage, totalPages } = useAppSelector(
    (state) => state.carsPagination
  );

  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryRarams();

  // set query params, get brands and all cars on the first load
  useEffect(() => {
    let page = Number(query.get('page')) || 1;
    dispatch(setActivePage(page));
    dispatch(getAllBrands());
  }, []);

  // update the query parameter of the url and get next page
  useEffect(() => {
    history.push({
      pathname: '/catalog',
      search: `?page=${activePage}`,
    });
    dispatch(getCars(activePage));
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <ContainerOuter pt={['4', '6', null, '8', '16']}>
      <VStack w="full" spacing={['66px']}>
        {/* filter */}
        <FilterWrap>
          <CatalogFilter isOpen={isFilterOpen} onToggle={toggleFilters} />
        </FilterWrap>
        <BannerCard />        
        {/* top pagination */}
        {/* car car list */}
        {!fethingCars ? (
          <CatalogListWrap>
            {cars.map((car: ICar, i) => (
              <Flex justify="center" key={i}>
                <CarCard car={car}/>
              </Flex>
            ))}
          </CatalogListWrap>
        ) : (
          <VStack h="100vh" w="full">
            <Spinner />
          </VStack>
        )}
        {/* bottom pagination` */}
        <Pagination
          totalPages={totalPages}
          activePage={activePage}
          onChange={(num: number) => dispatch(setActivePage(num))}
        />
      </VStack>
    </ContainerOuter>
  );
};
