import { useAppSelector, useAppDispatch } from 'src/redux/app/hook';
import { setActivePage } from 'src/redux/features/auth/carPaginationSlice';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';
import { useQueryParams } from './useQueryParams';

export const useCatalogActivePage = () => {
  const activePage = useAppSelector((state) => state.carsPagination.activePage);
  const query = useQueryParams();
  const dispatch = useAppDispatch();

  const page = Number(query.get('page')) || 1;

  const setActiveCatalogPage = () => {
    activePage
      ? query.set('page', activePage.toString())
      : query.set('page', page.toString());

    dispatch(setActivePage(query.get('page')));
    dispatch(setCatalogQuery(query.toString()));
  };

  return { setActiveCatalogPage };
};
