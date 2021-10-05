import { Box, HStack } from '@chakra-ui/react';
import { MiniCategoryCard } from 'components/molecules/MiniCategoryCard';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React, { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import './styles.css';

interface MiniCategoryProps {}

export const MiniCategory: React.FC<MiniCategoryProps> = () => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <Box w="full">
      <SectionHeader mainText="Mini Category" secondaryText="See all" />
      <HStack
        ref={ref}
        onMouseDown={onMouseDown}
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
