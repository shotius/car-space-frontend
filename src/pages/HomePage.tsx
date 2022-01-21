import { HStack, VStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CarListCarousel } from 'src/components/molecules/Carousels/CarListCarousel/CarListCarousel';
import { ScrollToTop } from 'src/components/molecules/ScrollToTop';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { CalculatorDesktop } from 'src/components/organizms/Calculator/CalculatorDesktop';
import { CalculatorMobile } from 'src/components/organizms/Calculator/CalculatorMobile';
import { CustomersReviewCarousel } from 'src/components/organizms/HomePage/Carousels/CustomersReviewCarousel';
import { HomeCarousel } from 'src/components/organizms/HomePage/Carousels/HomeCarousel';
import { CarImportCard } from 'src/components/organizms/HomePage/Sections/CarImportCard';
import { DealersSection } from 'src/components/organizms/HomePage/Sections/DealersSection';
import { HomeFilters } from 'src/components/organizms/HomePage/Sections/HomeFilters';
import { TopBrands } from 'src/components/organizms/HomePage/Sections/TopBrands';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { useAppDispatch } from 'src/redux/app/hook';
import { getRecentCars } from 'src/redux/features/auth/carsSlice';
import { resetFilters } from 'src/redux/features/auth/selectedCarFilterSlice';
import { getBanners } from 'src/redux/features/banners/bannerSlice';
import { setCatalogQuery } from 'src/redux/features/global/gloabalSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ICarDealer } from '../../../server/shared_with_front/types/types-shared';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [recentCars, setRecentCars] = useState<ICarDealer[]>([]);

  const { isMobile, isDesktop } = useDetectScreen();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // get banners 
    dispatch(getBanners())
    
    // get most recent added cars
    dispatch(getRecentCars())
      .unwrap()
      .then((data) => setRecentCars(data));

    // reset filters when home page is loaded
    dispatch(resetFilters());
    dispatch(setCatalogQuery(''));

  }, []);

  return (
    <>
      <ScrollToTop />
      <ContainerOuter pt={['0', null, '0', '48px']} p={['0', null, null, '4']}>
        <HomeCarousel />
      </ContainerOuter>

      {/* Filters  */}
      <ContainerOuter>
        <HomeFilters />
      </ContainerOuter>

      <VStack w="full" alignItems="center" spacing="64px">
        <MiniCategory />

        {/* Catalog  */}
        <VStack w="full">
          <ContainerOuter>
            <SectionHeader mainText="Catalog" />
          </ContainerOuter>
          <ContainerOuter pr="-4" mr="-4" ml="-4" pl="0">
            <CarListCarousel cars={recentCars} />
          </ContainerOuter>
        </VStack>

        {/* Customer review  */}
        <ContainerOuter>
          <VStack w="full">
            <SectionHeader mainText="Customer reviews" />
            <CustomersReviewCarousel />
          </VStack>
        </ContainerOuter>

        <TopBrands />

        <ContainerOuter>
          <DealersSection />

          {isMobile ? (
            <VStack w="full" pt="64px">
              <SectionHeader mainText="Calculator" />
              <CalculatorMobile />
            </VStack>
          ) : (
            <HStack spacing="48px" mt="128px" justify="center">
              <CalculatorDesktop children size="large" />
              {isDesktop && <CarImportCard />}
            </HStack>
          )}
        </ContainerOuter>
      </VStack>
    </>
  );
};
export default Home;
