import { useState } from 'react';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';
import { useQueryParams } from './useQueryParams';

export const useCatalogActivePage = () => {
  const [activePage, setActivePage] = useState<number | null>(null);
  const query = useQueryParams();

  function getPageFromUrl() {
    return Number(query.get('page')) || 1;
  }

  function setActiveCatalogPage() {
    activePage
      ? query.set('page', activePage.toString())
      : query.set('page', getPageFromUrl().toString());

    setActivePage(getPageFromUrl());
    setCatalogQuery(query.toString());
  }

  return { setActiveCatalogPage };
};
