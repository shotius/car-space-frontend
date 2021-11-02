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
  spacing=['11px', null, null, '10px'], 
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
        `repeat(${cardCount}, 1fr)`,
      ]}
      {...rest}
    >
      {children}
    </SimpleGrid>
  );
};
