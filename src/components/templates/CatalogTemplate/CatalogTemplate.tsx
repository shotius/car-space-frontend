import { VStack } from '@chakra-ui/layout';
import { lazy, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BannerCard } from 'src/components/molecules/Cards/BannerCard';
import { FiltersOnCatalogPage } from 'src/components/organizms/CatalogPage/Sections/FiltersOnCatalog';
import { useAppDispatch } from 'src/redux/app/hook';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';

// lazy routesk
const DealerCarList = lazy(
  () => import('src/pages/catalog/dealercars/DealerCarList')
);
const CopartCarList = lazy(
  () => import('src/pages/catalog/copartcars/CopartCarList')
);

interface CatalogTemplateProps {}

export const CatalogTemplate: React.FC<CatalogTemplateProps> = () => {
  const dispatch = useAppDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, []);

  return (
    <ContainerOuter pt={['4', '6', null, '8']}>
      <VStack w="full" spacing={['66px']}>
        <FiltersOnCatalogPage />
        <BannerCard />

        {/* nested routes */}
        <Switch>
          <Route
            path={`${path}/copart`}
            render={() => <CopartCarList />}
            exact
          />
          <Route
            path={`${path}/dealers`}
            render={() => <DealerCarList />}
            exact
          />
        </Switch>
      </VStack>
    </ContainerOuter>
  );
};
