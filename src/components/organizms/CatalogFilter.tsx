import { SimpleGrid, Stack, StackProps } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/react';
import { ThreeHDSelects } from 'src/components/molecules/FilterSelects/ThreeHDSelects';
import { ThreeTabletSelects } from 'src/components/molecules/FilterSelects/ThreeTabletSelects';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { MobileFilters } from '../molecules/FilterSelects/MobileFilters';
import SelectSecondary from '../molecules/SelectSecondary';

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
            gap={['4', null, null, '16px', null]}
            mt={['2', '4', null, '4', null, '24px']}
          >
            <SelectSecondary placeholder="Engine"></SelectSecondary>
            <SelectSecondary placeholder="Engine"></SelectSecondary>
            <SelectSecondary placeholder="Mileage"></SelectSecondary>
            <SelectSecondary placeholder="Condition"></SelectSecondary>
            <SelectSecondary placeholder="Type"></SelectSecondary>
            <SelectSecondary placeholder="Location"></SelectSecondary>
            <SelectSecondary placeholder="Transmission"></SelectSecondary>
            <SelectSecondary placeholder="Drive"></SelectSecondary>
            <SelectSecondary placeholder="Fuel"></SelectSecondary>
            <SelectSecondary placeholder="Cylinder"></SelectSecondary>
          </SimpleGrid>
        </Collapse>
      )}
    </Stack>
  );
};
