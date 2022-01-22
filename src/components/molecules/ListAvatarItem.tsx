import {
  Image,
  HStack,
  AspectRatio,
  VStack,
  StackProps,
} from '@chakra-ui/react';
import { TextSecondary } from '../atoms/Texts/TextSecondary';
import { TextRegular } from './Texts/TextRegular';
import userIcon from 'src/assets/png/user.png';

interface ListAvatarsProps {
  index?: number;
  avatar: string;
  mainText: string;
  secondaryText: string;
  verified?: boolean;
}

export const ListAvatarItem: React.FC<ListAvatarsProps & StackProps> = ({
  avatar,
  index,
  mainText,
  secondaryText,
  verified,
  ...rest
}) => {
  return (
    <HStack
      cursor={'pointer'}
      transition="all .2s"
      _hover={{ bg: 'autoGrey.200' }}
      w="full"
      py="4"
      px="2"
      {...rest}
    >
      <TextRegular alignSelf={'flex-end'}>{}.</TextRegular>
      <AspectRatio w="40px" ratio={1 / 1} borderRadius={'100px'} bg="white">
        <Image src={avatar} borderRadius="100px" fallbackSrc={userIcon} />
      </AspectRatio>
      <VStack align="flex-start" spacing={'0'}>
        <TextRegular>{mainText}</TextRegular>
        <HStack>
          <TextSecondary>{secondaryText}</TextSecondary>
          {verified !== undefined && (
            <>
              {verified !== undefined && verified ? (
                <TextSecondary color="green">verified</TextSecondary>
              ) : (
                <TextRegular color="red">no verified</TextRegular>
              )}
            </>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
};
