import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';

interface CatalogListWrapProps {}

export const CatalogListWrap: React.FC<CatalogListWrapProps & SimpleGridProps> =
  ({ children, gap="32px", ...rest }) => {
    return (
      <SimpleGrid
        gridTemplateColumns={[
          '1fr',
          '1fr 1fr',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={gap}
        w="full"
        {...rest}
      >
        {children}
      </SimpleGrid>
    );
  };
