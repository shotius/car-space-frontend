import { HStack, Stack, VStack } from '@chakra-ui/react';
import { ButtonRegular } from './Buttons/ButtonRegular';
import { CardWithHeading } from './Cards/CardWithHeading';
import { HeadingSecondary } from './Headings/HeadingSecondary';
import { TextRegular } from './Texts/TextRegular';

interface BidInfoCardProps {}

export const BidInfoCard: React.FC<BidInfoCardProps> = ({}) => {
  return (
    <CardWithHeading heading="Bid information">
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
      <Stack
        spacing={['10px', '15px']}
        w="full"
        pt="4"
        direction={['column', 'row-reverse']}
      >
        <ButtonRegular>Contact</ButtonRegular>
        <ButtonRegular
          color="#000"
          bg="#F0F0F0"
          _active={{ bg: 'autoGrey.400' }}
        >
          But it now
          <TextRegular opacity="0.5" ml="4">
            {' '}
            $2 500
          </TextRegular>
        </ButtonRegular>
      </Stack>
    </CardWithHeading>
  );
};
