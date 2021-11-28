import { VStack } from '@chakra-ui/layout';
import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { CarCard } from 'src/components/molecules/Cards/CarCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { Pagination } from 'src/components/molecules/Pagination/Pagination';
import { CatalogListWrap } from 'src/components/molecules/Wrappers/CatalogListWrap';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getCars } from 'src/redux/features/auth/carsSlice';
import { getAllFavouritesThunk } from 'src/redux/features/auth/userSlice';
import { openCatalogBanner } from 'src/redux/features/global/gloabalSlice';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';
import { ICar } from '../../../../../../server/shared_with_front/types/types-shared';

interface CatalogLIstProps {}

export const CarListOnCatalogPage: React.FC<CatalogLIstProps> = () => {
  const { cars, fethingCars } = useAppSelector((state) => state.carsReducer);
  const { totalPages } = useAppSelector((state) => state.carsPagination);
  const { isAuthenticated } = useAppSelector((state) => state.userInfoSlice);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryParams();

  const page = Number(query.get('page')) || 1;

  // console.log('query in the catalog: ', query)
  // console.log('page', page)

  useEffect(() => {
    // console.log(query.get('brands'))
  }, [query]);

  // set query params, get brands and all cars on the first load
  useEffect(() => {
    dispatch(openCatalogBanner());
    if (isAuthenticated) {
      dispatch(getAllFavouritesThunk());
    }
  }, [isAuthenticated]);

  const changePage = (page: number) => {
    query.set('page', String(page));
    history.push({ search: query.toString() });
  };

  // update the query parameter of the url and get next page
  useEffect(() => {
    dispatch(getCars(query));
    // browser back button scrolls to the bottom, this line will scroll to the top
    setTimeout(() => window.scrollTo(0, 0));
  }, [page]);

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
