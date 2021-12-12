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
import { getDealerCars } from 'src/redux/features/auth/carsSlice';
import { getAllFavouriteLotNumbersThunk } from 'src/redux/features/auth/userSlice';
import {
  closeCatalogBanner,
  setCatalogQuery
} from 'src/redux/features/global/gloabalSlice';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';

interface CatalogLIstProps {}

export const CarListOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { dealerCars: cars, fetchingDealerCars: fethingCars } = useAppSelector(
    (state) => state.carsReducer
  );
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
      NetworkErrorAlert();
    }
  }, [networkError]);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryParams();

  const page = Number(query.get('page')) || 1;

  // on the first load put page query in the url and open the banner
  useEffect(() => {
    if (!catalogQuery) {
      activePage
        ? query.set('page', activePage.toString())
        : query.set('page', page.toString());

      history.push({ search: query.toString() });
      dispatch(setActivePage(query.get('page')));
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
      dispatch(getAllFavouriteLotNumbersThunk());
    }
  }, [isAuthenticated]);

  // when page number changes, get cars and scroll to top and save active page in redux
  useEffect(() => {
    if (catalogQuery !== query.toString()) {
      dispatch(getDealerCars(query));
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
