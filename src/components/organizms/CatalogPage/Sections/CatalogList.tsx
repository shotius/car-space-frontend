import { VStack } from '@chakra-ui/layout';
import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BannerCard } from 'src/components/molecules/Cards/BannerCard';
import { CarCard } from 'src/components/molecules/Cards/CarCard';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { FilterWrap } from 'src/components/molecules/Wrappers/FilterWrap';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { toggleAdvancedFilters } from 'src/redux/features/auth/carFilterSlice';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import { getCars, getFilters } from 'src/redux/features/auth/carsSlice';
import { ICar } from 'src/redux/features/auth/types';
import { useQueryRarams } from 'src/utils/hooks/useQueryParams';
import { CatalogFilters } from './CatalogFilter';

interface CatalogLIstProps {}

export const CatalogList: React.FC<CatalogLIstProps> = () => {
  const { isAdvancedFiltersOpen } = useAppSelector(
    (state) => state.selectedCarFilters
  );
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
    dispatch(getFilters())
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


  // filter toggle funciotn 
  // const onToggle = () => {
  //   dispatch(toggleAdvancedFilters())
  // }

  return (
    <ContainerOuter pt={['4', '6', null, '8', '16']}>
      <VStack w="full" spacing={['66px']}>
        {/* filter */}
        <FilterWrap>
          <CatalogFilters
            isOpen={isAdvancedFiltersOpen}
            onToggle={() => dispatch(toggleAdvancedFilters())}
          />
        </FilterWrap>
        <BannerCard />

        {/* car car list */}
        {!fethingCars ? (
          <CatalogListWrap>
            {cars.map((car: ICar, i) => (
              <Flex justify="center" key={i}>
                <CarCard car={car} />
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
