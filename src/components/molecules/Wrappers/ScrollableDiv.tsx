import { SimpleGrid, SimpleGridProps } from '@chakra-ui/layout';

interface ScrollableDivProps {
  cardCount: number;
  columnsLaptop?: number;
  spacing?: SimpleGridProps['spacing'];
  columnsHD?: number;
}

export const ScrollableDiv: React.FC<ScrollableDivProps & SimpleGridProps> = ({
  cardCount,
  children,
  p = '16px 0px',
  spacing = ['11px', null, null, '16px'],
  ...rest
}) => {
  return (
    <SimpleGrid
      overflow="auto"
      p={p}
      gap={spacing}
      gridTemplateColumns={[
        `repeat(${cardCount}, 1fr)`,
        null,
        null,
        `repeat(${cardCount}, 1fr)`,
      ]}
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      {...rest}
    >
      {children}
    </SimpleGrid>
  );
};
