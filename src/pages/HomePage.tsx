import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CalculatorDesktop } from 'src/components/molecules/Calculator/CalculatorDesktop';
import { HomeCarousel } from 'src/components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'src/components/molecules/Search/Search';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { DealersSection } from 'src/components/organizms/DealersSection';
import { CustomersReview } from 'src/components/organizms/HomePage/CustomersReview';
import { TopBrands } from 'src/components/organizms/HomePage/TopBrands';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { CarListSlider } from 'src/components/organizms/Sliders/CarListSlider/CarListSlider';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamCar } from 'src/DamnCard';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter>
        <HomeCarousel />
        <Search />
        <VStack w="full" alignItems="flex-start" spacing="64px">
          <MiniCategory />
          <VStack w="full">
            <SectionHeader mainText="Catalog" secondaryText="See all" />
            <CarListSlider car={DamCar} />
          </VStack>
          <VStack w="full">
            <SectionHeader mainText="Customer review" />
            <CustomersReview />
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
