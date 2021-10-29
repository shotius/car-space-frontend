import { HStack, VStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface CarInfoCardMobileProps {}

export const CarInfoCardMobile: React.FC<CarInfoCardMobileProps> = () => {
  return (
    <CardWithHeading heading="Car information">
      <VStack w="full" spacing="18px">
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Primary damage</TextRegular>
          <HeadingSecondary>Front End</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Secondary damage</TextRegular>
          <HeadingSecondary>Front End</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Car condition</TextRegular>
          <HeadingSecondary>Front End</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Location</TextRegular>
          <HeadingSecondary>USA</HeadingSecondary>
        </HStack>
      </VStack>
    </CardWithHeading>
  );
};
