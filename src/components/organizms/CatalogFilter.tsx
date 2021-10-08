import {
  HStack,
  SimpleGrid,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/layout';
import { Button, Collapse } from '@chakra-ui/react';
import { Select } from 'components/atoms/Select';
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
    <Stack {...rest} >
      <ThreeMobileSelects />
      <ThreeTabletSelects />
      <Collapse in={isOpen}>
        <SimpleGrid templateColumns={['1fr']} spacing="2">
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
      <HStack w="full" justify="space-between" alignItems="stretch" pt={['0',"1"]}>
        <SearchButton flexBasis="50%" />
        <Button
          variant="outline"
          color="white"
          fontWeight="light"
          flexBasis="50%"
          onClick={onToggle}
          display={['block', null, 'none']}
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
