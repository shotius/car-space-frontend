import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';

interface CatalogListWrapProps {}

export const CatalogListWrap: React.FC<CatalogListWrapProps & SimpleGridProps> =
  ({ children, ...rest }) => {
    return (
      <SimpleGrid
        gridTemplateColumns={[
          '1fr',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
          null, 
        ]}
        spacing="4"
        w="full"
        {...rest}
      >
        {children}
      </SimpleGrid>
    );
  };
