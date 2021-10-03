import { Box, Flex, VStack } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import { HomeCarousel } from 'components/molecules/HomeCarousel/HomeCarousel';
import { Search } from 'components/molecules/Search/Search';
import { CustomperReview } from 'components/organizms/CustomperReview';
import { HomeCategory } from 'components/organizms/HomeCategory';
import { MiniCategory } from 'components/organizms/MiniCategory/MiniCategory';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <PublicLayout>
      <Container maxW="1640px" overflowX="hidden">
        <HomeCarousel />
        <Search />
        <VStack alignItems="flex-start" w="full" spacing="64px">
          <MiniCategory />
          <HomeCategory />
          <CustomperReview />
        </VStack>
        <Flex
          w="full"
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
          <Box minW="100px" h="100px" bg="red" mr="10px"></Box>
        </Flex>
      </Container>
    </PublicLayout>
  );
};
