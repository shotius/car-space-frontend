import {
  AspectRatio, Image, ImageProps, Stack, StackProps,
  VStack
} from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface UserAvatarProps {
  image: ImageProps['src'];
  mainText?: string;
  secondaryText?: string;
}

export const UserAvatar: React.FC<UserAvatarProps & StackProps> = ({
  image,
  mainText,
  secondaryText, 
  ...rest
}) => {
  return (
    <Stack
      direction={['row', 'column']}
      align="center"
      spacing={["4", '10px']}
      ml={[null, '4']}
      w={["full", 'auto']}
      {...rest}
    >
      <AspectRatio ratio={1 / 1} w={['49px', '70px']}>
        <Image src={image} alt="delear" objectFit="cover" borderRadius="full" />
      </AspectRatio>
      <VStack align="flex-start" spacing={0}>
        <HeadingSecondary isTruncated maxW="200px">
          {mainText}
        </HeadingSecondary>
        <TextRegular opacity="0.5">
          {secondaryText}
        </TextRegular>
      </VStack>
    </Stack>
  );
};
