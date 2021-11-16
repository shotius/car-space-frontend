import { SimpleGrid, Stack, StackProps } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/react';
import { ThreeHDSelects } from 'src/components/organizms/FilterSelects/ThreeHDSelects';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { MobileFilters } from '../../FilterSelects/MobileFilters';
import SelectSecondary from '../../../molecules/Selects/SelectSecondary';

interface FilterMobileProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CatalogFilters: React.FC<FilterMobileProps & StackProps> = ({
  isOpen,
  onToggle,
  ...rest
}) => {
  const { isMobile } = useDetectScreen();

  return (
    <Stack {...rest} spacing="0">
      {/* mobile selects */}
      {isMobile && <MobileFilters />}

      {/* desktop selects */}
      {!isMobile && <ThreeHDSelects isOpen={isOpen} onToggle={onToggle} />}

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
            spacingX="4"
            spacingY="2"
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
