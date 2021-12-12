import {
  AspectRatio,
  Avatar,
  Box,
  Image,
  ImageProps,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { toggleProfilePictureChangeModal } from 'src/redux/features/global/gloabalSlice';
import { InstagramButton } from '../Buttons/InstagramButton';
import { HeadingSecondary } from '../Headings/HeadingSecondary';

interface UserAvatarProps {
  image?: ImageProps['src'];
  mainText?: string;
  secondaryText?: string;
  size?: ImageProps['w'];
  showPhotoChange?: boolean;
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
  showPhotoChange = false, 
  ...rest
}) => {
  const { username } = useAppSelector((state) => state.userInfoSlice);
  const dispatch = useAppDispatch();

  return (
    <Stack
      direction={direction}
      align={align}
      spacing={spacing}
      w={w}
      {...rest}
    >
      <Box position="relative">
        <InstagramButton
          zIndex="1"
          position="absolute"
          borderRadius="100px"
          boxSize={8}
          bg="white"
          top="43px"
          right="0px"
          _hover={{
            transform: 'scale(1.2)',
          }}
          _active={{
            transform: 'scale(1.1)',
          }}
          display={showPhotoChange ? "block" : "none"}
          onClick={() => dispatch(toggleProfilePictureChangeModal())}
        />
        {image ? (
          <AspectRatio ratio={1 / 1} w={size}>
            <Image
              src={image}
              alt="profile avatar"
              objectFit="cover"
              borderRadius="full"
            />
          </AspectRatio>
        ) : (
          <Avatar
            name={username || 'default'}
            bg="#3D405B"
            color="#fff"
            w={size}
            h={size}
          />
        )}
      </Box>

      <VStack align={['flex-start', 'center']} spacing={0}>
        <HeadingSecondary maxW="150px" isTruncated>
          {mainText}
        </HeadingSecondary>
        <HeadingSecondary
          fontSize="16px"
          isTruncated
          maxW="150px"
          opacity="0.5"
        >
          {secondaryText}
        </HeadingSecondary>
      </VStack>
    </Stack>
  );
};
