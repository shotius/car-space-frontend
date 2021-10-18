import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { HomeCarousel } from 'src/components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'src/components/molecules/Search/Search';
import { Calculator } from 'src/components/organizms/Calculator';
import Catalog from 'src/components/organizms/Catalog/Catalog';
import { CustomperReview } from 'src/components/organizms/CustomperReview';
import { DealersSection } from 'src/components/organizms/DealersSection';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { TopBrands } from 'src/components/organizms/TopBrands';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
  <PublicLayout>
    <ContainerOuter>
      <HomeCarousel />
      <Search />
      <VStack
        w="full"
        alignItems="flex-start"
        spacing={['64px', '85px', '101px', '138px']}
      >
        <MiniCategory />
        <Catalog />
        <CustomperReview />
        <TopBrands />
        <DealersSection />
        <Calculator />
      </VStack>
    </ContainerOuter>
  </PublicLayout>
);
export default Home;
