import { VStack, StackDivider, HStack } from '@chakra-ui/layout';
import { capitalize } from 'src/utils/functions/capitalize';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { ICar } from '../../../../../server/shared_with_front/types/types-shared';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface CarSpecTableProps {
  car: ICar;
}

export const CarSpecTable: React.FC<CarSpecTableProps> = ({car}) => {
  console.log('car', car)
  return (
    <VStack divider={<StackDivider />} w="full" spacing="2.5">
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">VIN number</TextRegular>
        <HeadingSecondary>{car.lN}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Manufacturer</TextRegular>
        <HeadingSecondary>{capitalize(car.m)}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Model</TextRegular>
        <HeadingSecondary>{capitalizeEach(car.mD)}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Year</TextRegular>
        <HeadingSecondary>{car.y}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Category</TextRegular>
        <HeadingSecondary>{car.bSt}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Fuel type</TextRegular>
        <HeadingSecondary>{capitalize(car.fuel)}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Engine</TextRegular>
        <HeadingSecondary>5.6</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Mileage</TextRegular>
        <HeadingSecondary>123 123 km</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Has Keys</TextRegular>
        <HeadingSecondary>{capitalize(car.hK)}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Mileage</TextRegular>
        <HeadingSecondary >{car.od} km</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Cylinder</TextRegular>
        <HeadingSecondary>{car.cyl}</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Wheel</TextRegular>
        <HeadingSecondary>4X4</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Airbags</TextRegular>
        <HeadingSecondary>4</HeadingSecondary>
      </HStack>
      <HStack w="full" justify="space-between">
        <TextRegular opacity="0.5">Gear type</TextRegular>
        <HeadingSecondary>{capitalize(car.trans)}</HeadingSecondary>
      </HStack>
    </VStack>
  );
};
