import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { HomeCarousel } from 'src/components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'src/components/molecules/Search/Search';
import { Calculator } from 'src/components/organizms/Calculator';
import { CustomperReview } from 'src/components/organizms/CustomperReview';
import { DealersSection } from 'src/components/organizms/DealersSection';
import { HomeCategory } from 'src/components/organizms/HomeCategory';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { TopBrands } from 'src/components/organizms/TopBrands';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import React from 'react';
import SwiperSlider from 'src/components/organizms/Swiper/SwiperSlider';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
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
          <HomeCategory />
          <CustomperReview />
          <TopBrands />
          <DealersSection />
          <Calculator />
        </VStack>
      </ContainerOuter>
    </PublicLayout>
  );
};
