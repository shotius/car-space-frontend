import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';

interface ScrollableDivProps {
  cardCount: number
}

export const ScrollableDiv: React.FC<ScrollableDivProps> = ({ cardCount,  children }) => {

  return (
    <SimpleGrid
      overflow="auto"
      gap="4"
      gridTemplateColumns={[`repeat(${cardCount}, 1fr)`, null,null, 'repeat(6, 1fr)']}
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {children}
    </SimpleGrid>
  );
};
