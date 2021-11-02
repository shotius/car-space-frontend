import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { HomeCarousel } from 'src/components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'src/components/molecules/Search/Search';
import { SectionHeader } from 'src/components/molecules/SectionHeader/SectionHeader';
import { Calculator } from 'src/components/organizms/Calculator';
import { CarListSlider } from 'src/components/organizms/Sliders/CarListSlider';
import { DealersSection } from 'src/components/organizms/DealersSection';
import { CustomersReview } from 'src/components/organizms/HomePage/CustomersReview';
import { CustomperReview } from 'src/components/organizms/HomePage/CustomperReview';
import { TopBrands } from 'src/components/organizms/HomePage/TopBrands';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import { DamCar } from 'src/DamnCard';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return <PublicLayout>
    <ContainerOuter>
      <HomeCarousel />
      <Search />
      <VStack
        w="full"
        alignItems="flex-start"
        spacing='64px'
      >
        <MiniCategory />
        <VStack w="full">
          <SectionHeader mainText="Catalog" secondaryText="See all" />
          <CarListSlider car={DamCar} />
        </VStack>
        <CustomperReview />
        <CustomersReview />
        <TopBrands />
        <DealersSection />
        <Calculator />
      </VStack>
    </ContainerOuter>
  </PublicLayout>;
};
export default Home;
