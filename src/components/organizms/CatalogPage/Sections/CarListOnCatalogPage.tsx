import { VStack } from '@chakra-ui/layout';
import { Flex, Spinner, useToast } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { DealerCarCard } from 'src/components/molecules/Cards/DealerCarCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import { setFetchingCars } from 'src/redux/features/auth/carsSlice';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { getFavouriteCarIds } from 'src/redux/features/auth/userSlice';
import {
  closeCatalogBanner,
  setCatalogQuery,
} from 'src/redux/features/global/gloabalSlice';
import useOnSubmit from 'src/utils/hooks/useOnSubmit';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';

interface CatalogLIstProps {}

export const CarListOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const cars = useAppSelector((state) => state.carsReducer.dealerCars);
  const activePage = useAppSelector((state) => state.carsPagination.activePage);
  const totalPages = useAppSelector((state) => state.carsPagination.totalPages);

  const fethingCars = useAppSelector(
    (state) => state.carsReducer.fetchingDealerCars
  );
  const isAuthenticated = useAppSelector(
    (state) => state.userInfoSlice.isAuthenticated
  );
  const networkError = useAppSelector(
    (state) => state.globalAppState.networkError
  );
  const catalogQuery = useAppSelector(
    (state) => state.globalAppState.catalogQuery
  );

  const toast = useToast();
  const toastIdRef = useRef<any>();
  const filters = useAppSelector((state) => state.selectedCarFilters);

  useEffect(() => {
    if (networkError) {
      NetworkErrorAlert();
    }
  }, [networkError]);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryParams();

  const page = Number(query.get('page')) || 1;

  const onSubmit = useOnSubmit();

  // on the first load put page query in the url and open the banner
  useEffect(() => {
    if (!catalogQuery) {
      activePage
        ? query.set('page', activePage.toString())
        : query.set('page', page.toString());

      history.push({ search: query.toString() });
      dispatch(setActivePage(query.get('page')));
      dispatch(setFetchingCars(true));
      dispatch(setCatalogQuery(query.toString()));
    } else {
      history.push({ search: catalogQuery });
    }

    return () => {
      dispatch(closeCatalogBanner());
    };
  }, []);

  // If Authenticated get All favourite cars
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getFavouriteCarIds(''));
    }
  }, [isAuthenticated]);

  // when page number changes, get cars and scroll to top and save active page in redux
  useEffect(() => {
    if (catalogQuery !== query.toString()) {
      onSubmit(filters);
      dispatch(setActivePage(query.get('page')));
    }
  }, [page, catalogQuery]);

  // on pagin number press
  const changePage = (page: number) => {
    query.set('page', String(page));
    history.push({ search: query.toString() });
  };

  // if network error occurs notification will be displayed
  const NetworkErrorAlert = () => {
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
