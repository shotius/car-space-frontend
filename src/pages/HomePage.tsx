import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CalculatorDesktop } from 'src/components/molecules/Calculator/CalculatorDesktop';
import { CarListCarousel } from 'src/components/molecules/Carousels/CarListCarousel/CarListCarousel';
import { HomeCarousel } from 'src/components/molecules/HomeCarousel/HomeCarousel';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { CustomersReviewCarousel } from 'src/components/organizms/HomePage/Carousels/CustomersReviewCarousel';
import { DealersSection } from 'src/components/organizms/HomePage/Sections/DealersSection';
import { HomeFilters } from 'src/components/organizms/HomePage/Sections/HomeFilters';
import { TopBrands } from 'src/components/organizms/HomePage/Sections/TopBrands';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamCar } from 'src/DamnCard';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { isMobile } = useDetectScreen();
  return (
    <PublicLayout>
      <ContainerOuter>
        <HomeCarousel />
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
            {!isMobile && <CalculatorDesktop children size="large" />}
          </VStack>
        </VStack>
      </ContainerOuter>
    </PublicLayout>
  );
};
export default Home;
