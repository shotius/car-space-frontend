import { VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'components/atoms/Containers/ContainerOuter';
import { HomeCarousel } from 'components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'components/molecules/Search/Search';
import { Calculator } from 'components/organizms/Calculator';
import { CustomperReview } from 'components/organizms/CustomperReview';
import { DealersSection } from 'components/organizms/DealersSection';
import { HomeCategory } from 'components/organizms/HomeCategory';
import { MiniCategory } from 'components/organizms/MiniCategory/MiniCategory';
import { TopBrands } from 'components/organizms/TopBrands';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react';

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
