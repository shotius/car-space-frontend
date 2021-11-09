import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CalculatorDesktop } from 'src/components/organizms/Calculator/CalculatorDesktop';
import { CarListCarousel } from 'src/components/molecules/Carousels/CarListCarousel/CarListCarousel';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { CustomersReviewCarousel } from 'src/components/organizms/HomePage/Carousels/CustomersReviewCarousel';
import { HomeCarousel } from 'src/components/organizms/HomePage/Carousels/HomeCarousel';
import { DealersSection } from 'src/components/organizms/HomePage/Sections/DealersSection';
import { HomeFilters } from 'src/components/organizms/HomePage/Sections/HomeFilters';
import { TopBrands } from 'src/components/organizms/HomePage/Sections/TopBrands';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamCar } from 'src/DamnCard';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { CalculatorMobile } from 'src/components/organizms/Calculator/CalculatorMobile';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { isMobile } = useDetectScreen();
  return (
    <PublicLayout>
      <ContainerOuter p="0" pt={['0', null, '0', '48px']}>
        <HomeCarousel />
      </ContainerOuter>
      <ContainerOuter>
        <HomeFilters />

        <VStack w="full" alignItems="flex-start" spacing="64px">
          <MiniCategory />
          <VStack w="full">
            <SectionHeader mainText="Catalog" secondaryText="See all" />
            <CarListCarousel car={DamCar} />
          </VStack>
          <VStack w="full">
            <SectionHeader mainText="Customer review" />
            <CustomersReviewCarousel />
          </VStack>
          <TopBrands />
          <DealersSection />
          <VStack w="full">
            {isMobile ? (
              <VStack w="full">
                <SectionHeader mainText="Calculator" />
                <CalculatorMobile />
              </VStack>
            ) : (
              <CalculatorDesktop children size="large" />
            )}
          </VStack>
        </VStack>
      </ContainerOuter>
    </PublicLayout>
  );
};
export default Home;
