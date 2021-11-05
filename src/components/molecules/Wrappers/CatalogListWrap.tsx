import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';

interface CatalogListWrapProps {}

export const CatalogListWrap: React.FC<CatalogListWrapProps & SimpleGridProps> =
  ({ children, ...rest }) => {
    return (
      <SimpleGrid
        gridTemplateColumns={[
          '1fr',
          '1fr 1fr',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        spacing="4"
        w="full"
        {...rest}
      >
        {children}
      </SimpleGrid>
    );
  };
