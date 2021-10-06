import { VStack } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import { HomeCarousel } from 'components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'components/molecules/Search/Search';
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
      <Container maxW={{base: "1004px",xl: "1640px"}} overflowX="hidden">
        <HomeCarousel />
        <Search />
        <VStack alignItems="flex-start" w="full" spacing="64px" mb="72">
          <MiniCategory />
          <HomeCategory />
          <CustomperReview />
          <TopBrands />
          <DealersSection />
        </VStack>
        
      </Container>
    </PublicLayout>
  );
};
