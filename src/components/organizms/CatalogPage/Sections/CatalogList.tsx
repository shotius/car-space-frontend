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
import { getCars, getFilters } from 'src/redux/features/auth/carsSlice';
import { toggleAdvancedFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { ICar } from 'src/redux/features/auth/types';
import { getAllFavouritesThunk } from 'src/redux/features/auth/userSlice';
import { useQueryRarams } from 'src/utils/hooks/useQueryParams';
import { CatalogFilters } from './CatalogFilter';

interface CatalogLIstProps {}

export const CatalogList: React.FC<CatalogLIstProps> = () => {
  const { isAdvancedFiltersOpen } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const { cars, fethingCars } = useAppSelector((state) => state.carsReducer);
  const { totalPages } = useAppSelector((state) => state.carsPagination);
  const { isAuthenticated } = useAppSelector((state) => state.userInfoSlice);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryRarams();

  const page = Number(query.get('page')) || 1;

  console.log('isAuthenticated one: ', isAuthenticated)
  // set query params, get brands and all cars on the first load
  useEffect(() => {
  console.log('isAuthenticated two: ', isAuthenticated)

    dispatch(getFilters());
    if (isAuthenticated) {
      dispatch(getAllFavouritesThunk());
    }
  }, [isAuthenticated]);

  const changePage = (page: number) => {
    history.push({
      pathname: '/catalog',
      search: `?page=${page}`,
    });
  };

  // update the query parameter of the url and get next page
  useEffect(() => {
    dispatch(getCars(page));
    // browser back button scrolls to the bottom, this line will scroll to the top
    setTimeout(() => window.scrollTo(0, 0));
  }, [page]);

  // filter toggle funciotn
  // const onToggle = () => {
  //   dispatch(toggleAdvancedFilters())
  // }

  return (
    <ContainerOuter pt={['4', '6', null, '8']}>
      <VStack w="full" spacing={['66px']}>
        {/* filter */}
        <FilterWrap>
          <CatalogFilters
            isOpen={isAdvancedFiltersOpen}
            onToggle={() => dispatch(toggleAdvancedFilters())}
          />
        </FilterWrap>
        <BannerCard />

        {/* car list */}
        {!fethingCars && !!cars.length ? (
          <CatalogListWrap gap="24px">
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
          activePage={page}
          onChange={(num: number) => changePage(num)}
        />
      </VStack>
    </ContainerOuter>
  );
};
