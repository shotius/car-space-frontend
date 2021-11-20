import { VStack } from '@chakra-ui/layout';
import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { CarCard } from 'src/components/molecules/Cards/CarCard';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getCars } from 'src/redux/features/auth/carsSlice';
import { ICar } from 'src/redux/features/auth/types';
import { getAllFavouritesThunk } from 'src/redux/features/auth/userSlice';
import { openCatalogBanner } from 'src/redux/features/global/gloabalSlice';
import { useQueryRarams } from 'src/utils/hooks/useQueryParams';

interface CatalogLIstProps {}

export const CarListOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { cars, fethingCars } = useAppSelector((state) => state.carsReducer);
  const { totalPages } = useAppSelector((state) => state.carsPagination);
  const { isAuthenticated } = useAppSelector((state) => state.userInfoSlice);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryRarams();

  const page = Number(query.get('page')) || 1;

  // set query params, get brands and all cars on the first load
  useEffect(() => {
    dispatch(openCatalogBanner());
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

  return (
    <>
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

      {/* Pagination` */}
      <Pagination
        totalPages={totalPages}
        activePage={page}
        onChange={(num: number) => changePage(num)}
      />
    </>
  );
};
