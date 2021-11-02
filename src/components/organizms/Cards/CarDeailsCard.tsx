import { HStack, StackDivider, VStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface CarDeailsCardProps {}

export const CarDeailsCardMobile: React.FC<CarDeailsCardProps> = ({}) => {
  return (
    <CardWithHeading
      heading="Car details"
      headingBg="transparent"
      bg="transparent"
      headinCl="#000"
      headingFontSize="20px"
      bodyPadding="0"
      headingPadding="12px 0px 25px 0px"
    >
      <VStack divider={<StackDivider />} w="full" spacing="2.5">
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">VIN number</TextRegular>
          <HeadingSecondary>123123123</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Manufacturer</TextRegular>
          <HeadingSecondary>Chevrolet</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Model</TextRegular>
          <HeadingSecondary>Cruze</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Year</TextRegular>
          <HeadingSecondary>2012</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Category</TextRegular>
          <HeadingSecondary>Jeep</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Fuel type</TextRegular>
          <HeadingSecondary>Petro</HeadingSecondary>
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
          <TextRegular opacity="0.5">Color</TextRegular>
          <HeadingSecondary>Black</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Interior Color</TextRegular>
          <HeadingSecondary>Red</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Cylinder</TextRegular>
          <HeadingSecondary>5</HeadingSecondary>
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
          <HeadingSecondary>Tiptonoc</HeadingSecondary>
        </HStack>
      </VStack>
    </CardWithHeading>
  );
};
