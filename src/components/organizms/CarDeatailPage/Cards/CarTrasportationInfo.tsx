import { VStack, HStack } from '@chakra-ui/layout';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface CarTrasportationInfoProps {}

export const CarTrasportationInfo: React.FC<CarTrasportationInfoProps> =
  ({}) => {
    return (
      <CardWithHeading heading="Transportation and fee">
        <VStack w="full" spacing="18px">
          <HStack w="full" justify="space-between">
            <TextRegular opacity="0.5">Transportation in Poti</TextRegular>
            <HeadingSecondary>$ 400</HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextRegular opacity="0.5">Auction fee</TextRegular>
            <HeadingSecondary textAlign="end" w="40%">
              $ 400
            </HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextRegular opacity="0.5">Total</TextRegular>
            <HeadingSecondary>$ 800</HeadingSecondary>
          </HStack>
        </VStack>
      </CardWithHeading>
    );
  };
