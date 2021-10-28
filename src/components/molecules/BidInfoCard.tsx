import {
  AspectRatio, HStack,
  InputGroup,
  InputLeftElement,
  VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { ButtonRegular } from './Buttons/ButtonRegular';
import { ButtonRound } from './Buttons/ButtonRound';
import { Card } from './Card';
import { HeadingSecondary } from './Headings/HeadingSecondary';
import { InputRegular } from './Inputs/InputRegular';
import { TextRegular } from './Texts/TextRegular';

interface BidInfoCardProps {}

export const BidInfoCard: React.FC<BidInfoCardProps> = ({}) => {
  const [userBidValue, setUserBidValue] = useState<number>(200);

  return (
    <Card mt="48px !important" p="0">
      <HeadingSecondary
        bg="autoBlue.400"
        borderTopRadius="8px"
        padding="12px 16px 12px 16px"
        color="#fff"
      >
        Bid information
      </HeadingSecondary>
      <VStack p="4" spacing="26">
        {/* current bid */}
        <HStack w="full">
          <VStack w="full" alignItems="flex-start" spacing="0">
            <TextRegular opacity="0.5" fontSize="14px">
              {' '}
              Bid Status
            </TextRegular>
            <HeadingSecondary>You have not bid</HeadingSecondary>
          </VStack>
          <VStack w="full" align="flex-start" spacing="0">
            <TextRegular opacity="0.5"> Current bid</TextRegular>
            <HeadingSecondary>$2 500</HeadingSecondary>
          </VStack>
        </HStack>

        {/* sales status */}
        <HStack w="full">
          <VStack w="full" alignItems="flex-start" spacing="0">
            <TextRegular opacity="0.5" fontSize="14px">
              {' '}
              Sale Status
            </TextRegular>
            <HeadingSecondary>You have not bid</HeadingSecondary>
          </VStack>
          <VStack w="full" align="flex-start" spacing="0">
            <TextRegular opacity="0.5"> Time leeft</TextRegular>
            <HeadingSecondary color="autoOrange.500">$2 500</HeadingSecondary>
          </VStack>
        </HStack>

        {/* User bid info */}
        <HStack bg="autoGrey.200" w="full" borderRadius="8px" p="4">
          <TextRegular
            opacity="0.5"
            w={userBidValue > 9999 ? '70%' : 'full'}
            p="0"
          >
            Your Price
          </TextRegular>
          <HStack w="full" p="0">
            <AspectRatio ratio={1} w="26px" minW="26px">
              <ButtonRound
                bg="autoBlue.400"
                color="white"
                _active={{
                  bg: 'grey',
                }}
                _hover={{
                  bg: 'autoBlue',
                }}
                onClick={() => setUserBidValue(userBidValue - 100)}
              >
                -
              </ButtonRound>
            </AspectRatio>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                h="26px"
                w="16px"
                children={<HeadingSecondary>$</HeadingSecondary>}
              />
              <InputRegular
                type="number"
                h="26px"
                value={userBidValue}
                onChange={(e) => setUserBidValue(Number(e.currentTarget.value))}
                opacity="1"
                fontWeight="bold"
                pr="0"
              />
            </InputGroup>
            <AspectRatio ratio={1} w="26px" minW="26px">
              <ButtonRound
                bg="autoBlue.400"
                color="white"
                _active={{
                  bg: 'grey',
                }}
                _hover={{
                  bg: 'autoBlue',
                }}
                onClick={() => setUserBidValue(userBidValue + 100)}
              >
                +
              </ButtonRound>
            </AspectRatio>
          </HStack>
        </HStack>
        {/* // contancet button */}
        <ButtonRegular mt="16px !important">Contact</ButtonRegular>
      </VStack>
    </Card>
  );
};
