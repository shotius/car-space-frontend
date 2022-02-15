import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { closeCatalogBanner } from 'src/redux/features/banners/CatalogBannerSlice';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';

export const useBannerCard = () => {
  const isOpen = useAppSelector(
    (state) => state.catalogBanner.isCatalogBannerOpen
  );

  const dealerName = useAppSelector(
    (state) => state.catalogBanner.catalogBannerDealerName
  );

  const dealerImage = useAppSelector(
    (state) => state.catalogBanner.catalogBannerImage
  );

  const dispatch = useAppDispatch();

  const closeBanner = () => {
    dispatch(resetFilters());
    dispatch(setCatalogQuery(''));
    dispatch(closeCatalogBanner());
  };

  return { dealerImage, dealerName, isOpen, closeBanner };
};
