import { Heading, VStack } from '@chakra-ui/layout';
import { Box, Container } from '@chakra-ui/react';
import { HomeCarousel } from 'src/components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'src/components/molecules/Search/Search';
import { HomeCategory } from 'src/components/organizms/HomeCategory';
import { MiniCategory } from 'src/components/organizms/MiniCategory/MiniCategory';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import React from 'react';
import SwiperSlider from 'src/components/organizms/Swiper/SwiperSlider';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <Container maxW="1640px">
        <HomeCarousel />
        <Search />
        <VStack alignItems="flex-start" w="full" spacing="64px">
          <MiniCategory />
          <HomeCategory />
          <Box h="xs" bg="gray.400" my="3">
            <Heading size="md">Customer Reviews</Heading>
          </Box>
            <SwiperSlider />
        </VStack>
      </Container>
    </PublicLayout>
  );
};
