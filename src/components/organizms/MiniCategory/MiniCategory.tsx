import { Box } from '@chakra-ui/react';
import { MiniCategoryCard } from 'components/molecules/MiniCategoryCard';
import { ScrollableDiv } from 'components/molecules/ScrollableDiv';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Mini Category" secondaryText="See all" />
      <ScrollableDiv>
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
      </ScrollableDiv>
    </Box>
  );
};
