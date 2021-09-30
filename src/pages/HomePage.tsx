import { Heading } from '@chakra-ui/layout';
import { Box, Container } from '@chakra-ui/react';
import { HomeCarousel } from 'components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'components/molecules/Search/Search';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <Container maxW="1640px">
        <HomeCarousel />
        <Search />
        <Box h="2xs" bg="gray.300">
          <Heading size="md">Mini Catalog</Heading>
        </Box>
        <Box h="sm" bg="gray.300" my="3">
          <Heading size="md">Catalog</Heading>
        </Box>
        <Box h="xs" bg="gray.400" my="3">
          <Heading size="md">Customer Reviews</Heading>
        </Box>
      </Container>
    </PublicLayout>
  );
};
