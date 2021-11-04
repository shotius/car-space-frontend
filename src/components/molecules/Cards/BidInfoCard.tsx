import { HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { CardWithHeading } from './CardWithHeading';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface BidInfoCardProps {}

export const BidInfoCard: React.FC<BidInfoCardProps> = ({}) => {

  return (
    <CardWithHeading heading="Bid information" w="full">
      {/* current bid */}
      <HStack w="full" alignItems="baseline">
        <VStack w="full" align="flex-start" spacing="0">
          <TextRegular opacity="0.5"> Current bid</TextRegular>
          <HeadingSecondary color="autoOrange.500" fontSize="20px">
            $2 500
          </HeadingSecondary>
        </VStack>

        {/* sales status */}
        <VStack w="full" align="flex-start" spacing="0">
          <TextRegular opacity="0.5"> Time leeft</TextRegular>
          <HeadingSecondary>1d 3h 10m</HeadingSecondary>
        </VStack>
      </HStack>

      {/* // contancet button */}
      <SimpleGrid
        spacingX= '15px'
        spacingY='10px'
        w="full"
        pt="4"
        minChildWidth="170px"
      >
        <ButtonRegular >Contact</ButtonRegular>
        <ButtonRegular
          color="#000"
          gridRow={1}
          bg="#F0F0F0"
          _active={{ bg: 'autoGrey.400' }}
          display="flex"
          alignItems="center"
        >
          But it now
          <TextRegular opacity="0.5" ml="4">
            {' '}
            $2 500
          </TextRegular>
        </ButtonRegular>
      </SimpleGrid>
    </CardWithHeading>
  );
};
