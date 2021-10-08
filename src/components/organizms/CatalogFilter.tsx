import { HStack, SimpleGrid, Stack, StackProps } from '@chakra-ui/layout';
import { Button, Collapse } from '@chakra-ui/react';
import { Select } from 'components/atoms/Select';
import { ThreeHDSelects } from 'components/molecules/FilterSelects/ThreeHDSelects';
import { ThreeMobileSelects } from 'components/molecules/FilterSelects/ThreeMobileSelects';
import { ThreeTabletSelects } from 'components/molecules/FilterSelects/ThreeTabletSelects';
import { SearchButton } from 'components/molecules/SearchButton';
import { TextRegular } from 'components/molecules/Texts/TextRegular';
import React from 'react';

interface FilterMobileProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const CatalogFilter: React.FC<FilterMobileProps & StackProps> = ({
  isOpen,
  onToggle,
  ...rest
}) => {
  return (
    <Stack {...rest} spacing="0">
      <ThreeMobileSelects />
      <ThreeTabletSelects />
      <ThreeHDSelects isOpen={isOpen} onToggle={onToggle} />
      <Collapse in={isOpen}>
        <SimpleGrid
          templateColumns={[
            '1fr',
            '1fr 1fr',
            'repeat(3, 1fr)',
            'repeat(5, 1fr)',
          ]}
          spacing="2"
          mt={['2', '4', null, '32px']}
        >
          <Select placeholder="Condition" display={['none', 'block']}></Select>
          <Select placeholder="Type"></Select>
          <Select placeholder="Mileage"></Select>
          <Select placeholder="Engine"></Select>
          <Select placeholder="Location"></Select>
          <Select placeholder="Transmission"></Select>
          <Select placeholder="Drive"></Select>
          <Select placeholder="Fuel"></Select>
          <Select placeholder="Cylinder"></Select>
        </SimpleGrid>
      </Collapse>
      <HStack
        w="full"
        justify="space-between"
        alignItems="stretch"
        pt={['2', null, '4']}
        display={['flex', null, 'none']}
      >
        <SearchButton flexBasis="50%" />
        <Button
          variant="outline"
          color="white"
          fontWeight="light"
          flexBasis="50%"
          onClick={onToggle}
          _hover={{
            bg: 'transparent',
          }}
        >
          <TextRegular>
            {isOpen ? 'See less filter' : 'See more filter'}
          </TextRegular>
        </Button>
      </HStack>
    </Stack>
  );
};
