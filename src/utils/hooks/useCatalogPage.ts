import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import { setFetchingCars } from 'src/redux/features/auth/carsSlice';
import { getFavouriteCarIds } from 'src/redux/features/auth/userSlice';
import { closeCatalogBanner } from 'src/redux/features/banners/CatalogBannerSlice';
import { useCatalogActivePage } from './useCatalogActivePage';
import { useNetworkError } from './useNetworkError';
import useOnSubmit from './useOnSubmit';
import { useQueryParams } from './useQueryParams';

export const useCatalogPage = () => {
  const dispatch = useAppDispatch();
  const query = useQueryParams();
  const history = useHistory();

  const onSubmit = useOnSubmit();
  const { setActiveCatalogPage } = useCatalogActivePage();
  const { checkForNetworkError } = useNetworkError();

  const page = Number(query.get('page')) || 1;

  const cars = useAppSelector((state) => state.carsReducer.dealerCars);

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
  const filters = useAppSelector((state) => state.selectedCarFilters);

  useEffect(() => {
    checkForNetworkError();
  }, [networkError]);

  // on the first load put page query in the url and open the banner
  useEffect(() => {
    if (!catalogQuery) {
      dispatch(setFetchingCars(true));
      setActiveCatalogPage();
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

  return { query, cars, fethingCars, totalPages, page, changePage };
};
