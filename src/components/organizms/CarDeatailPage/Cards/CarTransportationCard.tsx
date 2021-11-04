import { HStack, VStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface CarTransportationCardProps {}

export const CarTransportationCard: React.FC<CarTransportationCardProps> =
  ({}) => {
    return (
      <CardWithHeading heading="Transportation and fee">
        <HStack w="full" justify="space-between" align="flex-start">
          <VStack align="flex-start" spacing="1">
            <TextRegular opacity="0.5"> Transportation to Poti</TextRegular>
            <HeadingSecondary>$ 400</HeadingSecondary>
          </VStack>
          <VStack align="flex-start" spacing="1">
            <TextRegular opacity="0.5"> Auction fee</TextRegular>
            <HeadingSecondary>$ 400</HeadingSecondary>
          </VStack>
          <HStack p="17px 24px" borderRadius="8px" bg="autoGrey.200">
            <TextRegular opacity="0.5">Total</TextRegular>
            <HeadingSecondary>$ 800</HeadingSecondary>
          </HStack>
        </HStack>
      </CardWithHeading>
    );
  };
