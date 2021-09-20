import { Heading, VStack } from '@chakra-ui/layout';
import { Search } from 'components/molecules/Search/Search';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <VStack w="full">
        <Heading size="2xl" textAlign="center" p={6}>
          HomePage
        </Heading>
      </VStack>
        <Search />
        <Heading size="md">Mini Catalog</Heading>
        <Heading size="md"> Catalog</Heading>
    </PublicLayout>
  );
};
