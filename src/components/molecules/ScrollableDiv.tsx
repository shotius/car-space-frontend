import { SimpleGrid, SimpleGridProps } from '@chakra-ui/layout';


interface ScrollableDivProps {
  cardCount: number;
  columnsLaptop?: number;
  spacing?: SimpleGridProps['spacing'];
  columnsHD?: number;
}

export const ScrollableDiv: React.FC<ScrollableDivProps & SimpleGridProps> = ({
  cardCount,
  columnsLaptop = 6,
  columnsHD = 6,
  children,
  spacing="4", 
  ...rest
}) => {
  return (
    <SimpleGrid
      overflow="auto"
      gap={spacing}
      gridTemplateColumns={[
        `repeat(${cardCount}, 1fr)`,
        null,
        null,
        `repeat(${columnsLaptop}, 1fr)`,
        `repeat(${columnsHD}, 1fr)`,
      ]}
      {...rest}
    >
      {children}
    </SimpleGrid>
  );
};
