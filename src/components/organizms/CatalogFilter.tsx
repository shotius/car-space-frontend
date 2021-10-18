import { SimpleGrid, Stack, StackProps } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/react';
import { Select } from 'src/components/atoms/Selects';
import { ThreeHDSelects } from 'src/components/molecules/FilterSelects/ThreeHDSelects';
import { ThreeTabletSelects } from 'src/components/molecules/FilterSelects/ThreeTabletSelects';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { MobileFilters } from '../molecules/FilterSelects/MobileFilters';

interface FilterMobileProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CatalogFilter: React.FC<FilterMobileProps & StackProps> = ({
  isOpen,
  onToggle,
  ...rest
}) => {
  const { isDesktop, isTablet, isMobile } = useDetectScreen();

  return (
    <Stack {...rest} spacing="0">
      {/* mobile selects */}
      {isMobile && <MobileFilters />}

      {/* tablet selects */}
      {isTablet && <ThreeTabletSelects />}

      {/* desktop selects */}
      {isDesktop && <ThreeHDSelects isOpen={isOpen} onToggle={onToggle} />}

      {/* this colapsable filters will appear on tablet and laptop screens */}
      {!isMobile && (
        <Collapse in={isOpen}>
          <SimpleGrid
            templateColumns={[
              null,
              '1fr 1fr',
              'repeat(3, 1fr)',
              'repeat(5, 1fr)',
            ]}
            spacing="2"
            mt={['2', '4', null, '4']}
          >
            <Select placeholder="Engine"></Select>
            <Select placeholder="Mileage"></Select>
            <Select
              placeholder="Condition"
              display={['none', 'block']}
            ></Select>
            <Select placeholder="Type"></Select>
            <Select placeholder="Location"></Select>
            <Select placeholder="Transmission"></Select>
            <Select placeholder="Drive"></Select>
            <Select placeholder="Fuel"></Select>
            <Select placeholder="Cylinder"></Select>
          </SimpleGrid>
        </Collapse>
      )}
    </Stack>
  );
};
