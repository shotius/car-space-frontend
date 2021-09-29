import { Heading, VStack } from '@chakra-ui/layout';
import { HomeCarousel } from 'components/molecules/MainSlider/HomeCarousel';
import { Search } from 'components/molecules/Search/Search';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <VStack w="full">
        <HomeCarousel />
      </VStack>
        <Search />
        <Heading size="md">Mini Catalog</Heading>
        <Heading size="md"> Catalog</Heading>
    </PublicLayout>
  );
};
