import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { MiniCategoryCard } from 'src/components/molecules/Cards/MiniCategoryCard';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { ScrollableDiv } from 'src/components/molecules/Wrappers/ScrollableDiv';
import { FilterQueries } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getDealerCarsCount } from 'src/redux/features/auth/carsSlice';
import {
  selectPriseFrom,
  selectPriseTo,
  selectTypes,
  setMostDemand,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { openCatalogBanner } from 'src/redux/features/banners/CatalogBannerSlice';
import {
  setFourToSix_k,
  setFour_k,
  setHachbacks,
  setMostDemandCount,
  setSedans,
  setSixToTen_k,
  setSuvs,
} from 'src/redux/features/miniCategory/miniCategorySlice';
import useCurrencyIcon from 'src/utils/hooks/useCurrencyIcon';
import { useQueryParams } from 'src/utils/hooks/useQueryParams';
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const query = useQueryParams();

  const { TYPE, PRICE_FROM, PRICE_TO, MOST_DEMAND } = FilterQueries;

  const currencyPrice = useAppSelector(
    (state) => state.globalAppState.currencyPrice
  );
  const suvs = useAppSelector((state) => state.miniCategory.suvs);
  const hachbackes = useAppSelector((state) => state.miniCategory.hackbacks);
  const sedans = useAppSelector((state) => state.miniCategory.sedans);
  const four_k = useAppSelector((state) => state.miniCategory.four_k);
  const fourToSix_k = useAppSelector((state) => state.miniCategory.fourToSix_k);
  const sixToTen_k = useAppSelector((state) => state.miniCategory.sixToTen_k);
  const mostDemands = useAppSelector((state) => state.miniCategory.mostDemands);

  const icon = useCurrencyIcon();

  const getSuvs = () => {
    query.set(TYPE, 'SUV');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setSuvs(count)));
  };

  const getHachbacks = () => {
    query.set(TYPE, 'hachback');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setHachbacks(count)));
  };

  const getSedans = () => {
    query.set(TYPE, 'sedan');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setSedans(count)));
  };

  const getFour_k = () => {
    query.delete(TYPE);
    query.set(PRICE_TO, '4000');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setFour_k(count)));
  };

  const getFourToSixK = () => {
    query.delete(TYPE);
    query.set(PRICE_FROM, '4000');
    query.set(PRICE_TO, '6000');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setFourToSix_k(count)));
  };

  const getSixToTenK = () => {
    query.delete(TYPE);
    query.set(PRICE_FROM, '6000');
    query.set(PRICE_TO, '10000');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setSixToTen_k(count)));
  };

  const getMostDemands = () => {
    query.delete(TYPE);
    query.delete(PRICE_FROM);
    query.delete(PRICE_TO);
    query.set(MOST_DEMAND, 'true');
    dispatch(getDealerCarsCount(query))
      .unwrap()
      .then((count) => dispatch(setMostDemandCount(count)));
  };

  useEffect(() => {
    getSuvs();
    getHachbacks();
    getSedans();
    getFour_k();
    getFourToSixK();
    getSixToTenK();
    getMostDemands();
  }, []);

  const redirect = () => {
    history.push('/catalog')
    dispatch(openCatalogBanner())
  };

  return (
    <Box w="full">
      <ContainerOuter pl="4">
        <SectionHeader mainText="Mini Category" />
      </ContainerOuter>
      <ContainerOuter p="0">
        <ScrollableDiv cardCount={7} pl="4" pr="4">
          <MiniCategoryCard
            onClick={() => {
              dispatch(selectTypes(['SUV']));
              redirect();
            }}
            categoryTitle="SUV"
            carCount={suvs}
          />
          <MiniCategoryCard
            onClick={() => {
              dispatch(selectTypes(['HACHBACK']));
              redirect();
            }}
            categoryTitle="Hachback"
            carCount={hachbackes}
          />
          <MiniCategoryCard
            onClick={() => {
              dispatch(selectTypes(['SEDAN']));
              redirect();
            }}
            categoryTitle="Sedan"
            carCount={sedans}
          />
          <MiniCategoryCard
            carCount={four_k}
            onClick={() => {
              dispatch(selectPriseTo((4000 / currencyPrice).toFixed()));
              redirect();
            }}
            categoryTitle={`${icon}4k`}
            mr="1px"
          />
          <MiniCategoryCard
            carCount={fourToSix_k}
            categoryTitle={`${icon}4-6k`}
            mr="1px"
            onClick={() => {
              dispatch(selectPriseFrom('4000'));
              dispatch(selectPriseTo('6000'));
              redirect();
            }}
          />
          <MiniCategoryCard
            carCount={sixToTen_k}
            onClick={() => {
              dispatch(selectPriseFrom('6000'));
              dispatch(selectPriseTo('10000'));
              redirect();
            }}
            categoryTitle={`${icon}6-10k`}
            mr="1px"
          />
          <MiniCategoryCard
            carCount={mostDemands}
            onClick={() => {
              dispatch(setMostDemand(true));
              history.push('/catalog');
            }}
            categoryTitle="Most demand"
          />
        </ScrollableDiv>
      </ContainerOuter>
    </Box>
  );
};
