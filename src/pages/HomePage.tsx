import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CalculatorDesktop } from 'src/components/molecules/Calculator/CalculatorDesktop';
import { HomeCarousel } from 'src/components/molecules/HomeCarousel/HomeCarousel';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { HomeFilters } from 'src/components/organizms/HomePage/Sections/HomeFilters';
import { TopBrands } from 'src/components/organizms/HomePage/Sections/TopBrands';
import { CustomersReviewSlider } from 'src/components/organizms/HomePage/Sliders/CustomersReviewSlider';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { CarListSlider } from 'src/components/molecules/Sliders/CarListSlider/CarListSlider';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamCar } from 'src/DamnCard';
import { DealersSection } from 'src/components/organizms/HomePage/Sections/DealersSection';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter>
        <HomeCarousel />
        <HomeFilters />
        <VStack w="full" alignItems="flex-start" spacing="64px">
          <MiniCategory />
          <VStack w="full">
            <SectionHeader mainText="Catalog" secondaryText="See all" />
            <CarListSlider car={DamCar} />
          </VStack>
          <VStack w="full">
            <SectionHeader mainText="Customer review" />
            <CustomersReviewSlider />
          </VStack>
          <TopBrands />
          <DealersSection />
          <VStack w='full'>
            <CalculatorDesktop children size="large" />
          </VStack>
        </VStack>
      </ContainerOuter>
    </PublicLayout>
  );
};
export default Home;
