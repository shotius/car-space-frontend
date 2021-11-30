import { VStack } from '@chakra-ui/layout';
import { Flex, Spinner, useToast } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { CarCard } from 'src/components/molecules/Cards/CarCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import { getCars } from 'src/redux/features/auth/carsSlice';
import { getAllFavouritesThunk } from 'src/redux/features/auth/userSlice';
import { openCatalogBanner } from 'src/redux/features/global/gloabalSlice';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';
import { ICar } from '../../../../../../server/shared_with_front/types/types-shared';

interface CatalogLIstProps {}

export const CarListOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { cars, fethingCars } = useAppSelector((state) => state.carsReducer);
  const { totalPages, activePage } = useAppSelector(
    (state) => state.carsPagination
  );
  const { isAuthenticated } = useAppSelector((state) => state.userInfoSlice);
  const toast = useToast();
  const toastIdRef = useRef<any>();
  const { networkError, catalogQuery } = useAppSelector(
    (state) => state.globalAppState
  );

  useEffect(() => {
    if (networkError) {
      addToast();
    }
  }, [networkError]);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryParams();

  const page = Number(query.get('page')) || 1;

  // on the first load put page query in the url and open the banner
  useEffect(() => {
    if (!catalogQuery) {
      
      console.log('here', page)
      activePage
        ? query.set('page', activePage.toString())
        : query.set('page', page.toString());

      history.push({ search: query.toString() });
      dispatch(setActivePage(query.get('page')));
    } else {
      history.push({ search: catalogQuery });
    }
    dispatch(openCatalogBanner());
  }, []);

  // If Authenticated get All favourite cars
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllFavouritesThunk());
    }
  }, [isAuthenticated]);

  // when page number changes, get cars and scroll to top and save active page in redux
  useEffect(() => {
    if (catalogQuery !== query.toString()) {
      console.log('query', query.toString());
      dispatch(getCars(query));
      dispatch(setActivePage(query.get('page')));
      // browser back button scrolls to the bottom, this line will scroll to the top
      setTimeout(() => window.scrollTo(0, 0));
    }
  }, [page, catalogQuery]);

  // on pagin number press
  const changePage = (page: number) => {
    query.set('page', String(page));
    history.push({ search: query.toString() });
  };

  // if network error occurs notification will be displayed
  const addToast = () => {
    toastIdRef.current = toast({
      title: networkError,
      status: 'error',
      position: 'top',
      duration: 3000,
      isClosable: true,
    });
  };

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
        <CatalogListWrap gap="24px">
          {cars.map((car: ICar, i) => (
            <Flex justify="center" key={i}>
              <CarCard car={car} />
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
