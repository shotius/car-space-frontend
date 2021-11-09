import {
  AspectRatio,
  Image,
  ImageProps,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';

interface UserAvatarProps {
  image: ImageProps['src'];
  mainText?: string;
  secondaryText?: string;
  size?: ImageProps['w'];
}

export const UserAvatar: React.FC<UserAvatarProps & StackProps> = ({
  image,
  mainText,
  secondaryText,
  direction = ['row', 'column'],
  align = 'center',
  spacing = ['4', '10px'],
  w = ['full', 'auto'],
  size = ['49px', '70px'],
  ...rest
}) => {
  return (
    <Stack
      direction={direction}
      align={align}
      spacing={spacing}
      ml={[null, '4']}
      w={w}
      {...rest}
    >
      <AspectRatio ratio={1 / 1} w={size}>
        <Image src={image} alt="delear" objectFit="cover" borderRadius="full" />
      </AspectRatio>
      <VStack align={["flex-start", "center"]} spacing={0}>
        <HeadingSecondary isTruncated maxW="200px">
          {mainText}
        </HeadingSecondary>
        <HeadingSecondary fontSize="16px" opacity="0.5">{secondaryText}</HeadingSecondary>
      </VStack>
    </Stack>
  );
};
