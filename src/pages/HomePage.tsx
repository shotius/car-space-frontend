import { Heading, VStack } from '@chakra-ui/layout';
import { Box, Container } from '@chakra-ui/react';
import { HomeCarousel } from 'components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'components/molecules/Search/Search';
import { MiniCatalogMob } from 'components/organizms/MiniCatalogMob/MiniCatalogMob';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <Container maxW="1640px">
        <HomeCarousel />
        <Search />
        <VStack alignItems="flex-start" w="full" spacing="64px">
          <MiniCatalogMob />
          <Box h="sm" my="3" bg="yellow" w="full">
            <Heading size="md">Catalog</Heading>
          </Box>
          <Box h="xs" bg="gray.400" my="3">
            <Heading size="md">Customer Reviews</Heading>
          </Box>
        </VStack>
      </Container>
    </PublicLayout>
  );
};
