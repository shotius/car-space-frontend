import { SimpleGrid } from '@chakra-ui/layout';
 ;

interface ScrollableDivProps {
  cardCount: number;
  columnsLaptop?: number;
  columnsHD?: number;
}

export const ScrollableDiv: React.FC<ScrollableDivProps> = ({
  cardCount,
  columnsLaptop = 6,
  columnsHD = 6,
  children,
}) => {
  return (
    <SimpleGrid
      overflow="auto"
      gap="4"
      gridTemplateColumns={[
        `repeat(${cardCount}, 1fr)`,
        null,
        null,
        `repeat(${columnsLaptop}, 1fr)`,
        `repeat(${columnsHD}, 1fr)`,
      ]}
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
