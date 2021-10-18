import { SimpleGrid, Stack, StackProps, VStack } from '@chakra-ui/layout';
import { Button, Collapse } from '@chakra-ui/react';
import { lazy, useState } from 'react';
import { Select } from 'src/components/atoms/Selects';
import { ThreeHDSelects } from 'src/components/molecules/FilterSelects/ThreeHDSelects';
import { ThreeTabletSelects } from 'src/components/molecules/FilterSelects/ThreeTabletSelects';
import { SearchButton } from 'src/components/molecules/SearchButton';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { WithMobileKeyboard } from '../molecules/WithMobileKeyboard';

const ThreeMobileSelects = lazy(
  () => import('src/components/molecules/FilterSelects/ThreeMobileSelects')
);

interface FilterMobileProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CatalogFilter: React.FC<FilterMobileProps & StackProps> = ({
  isOpen,
  onToggle,
  ...rest
}) => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const { isDesktop, isTablet, isMobile } = useDetectScreen();

  return (
    <Stack {...rest} spacing="0">
      {/* mobile selects */}
      {isMobile && <ThreeMobileSelects setIsInputFocused={setIsInputFocused} />}

      {/* tablet selects */}
      {isTablet && <ThreeTabletSelects />}

      {/* desktop selects */}
      {isDesktop && <ThreeHDSelects isOpen={isOpen} onToggle={onToggle} />}

      <Collapse in={isOpen}>
        <SimpleGrid
          templateColumns={[
            '1fr',
            '1fr 1fr',
            'repeat(3, 1fr)',
            'repeat(5, 1fr)',
          ]}
          spacing="2"
          mt={['2', '4', null, '4']}
        >
          <Select placeholder="Engine"></Select>
          <Select placeholder="Mileage"></Select>
          <Select placeholder="Condition" display={['none', 'block']}></Select>
          <Select placeholder="Type"></Select>
          <Select placeholder="Location"></Select>
          <Select placeholder="Transmission"></Select>
          <Select placeholder="Drive"></Select>
          <Select placeholder="Fuel"></Select>
          <Select placeholder="Cylinder"></Select>
        </SimpleGrid>
      </Collapse>
      <VStack pt="2" spacing="2.5" display={['flex', null, 'none']}>
        <WithMobileKeyboard isKeyboardActive={isInputFocused}>
          <SearchButton w="full" />
        </WithMobileKeyboard>
        <Button variant="link" onClick={onToggle} bg="transparent">
          <TextRegular color={'#000'}>
            {isOpen ? 'See less filter' : 'See more filter'}
          </TextRegular>
        </Button>
      </VStack>
    </Stack>
  );
};
