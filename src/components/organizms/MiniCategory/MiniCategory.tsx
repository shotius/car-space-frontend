import { Box, HStack } from '@chakra-ui/react';
import { MiniCategoryCard } from 'components/molecules/MiniCategoryCard';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Mini Category" secondaryText="See all" />
      <HStack
        w="full"
        overflow="auto"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
        <MiniCategoryCard />
      </HStack>
    </Box>
  );
};
