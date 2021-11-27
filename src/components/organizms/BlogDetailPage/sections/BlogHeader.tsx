import {
  Box, HStack, IconButton,
  Spacer
} from '@chakra-ui/react';
import { CopyIcon } from 'src/components/atoms/Icons/CopyIcon';
import { FbIconBlack } from 'src/components/atoms/Icons/FBIconBlack';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface HeaderProps {}

export const BlogHeader: React.FC<HeaderProps> = ({}) => {
  return (
    <Box w="full">
      <HeadingSecondary
        fontSize={['24px', '32px', null, '50px']}
        pt={['0px', '20px', '30px', '48px']}
      >
        Title
      </HeadingSecondary>
      <HStack w="full">
        <TextRegular opacity="0.5" fontSize="14px">
          01.02.2021
        </TextRegular>
        <Spacer />
        <HStack  pr="4">
          <IconButton
            borderRadius="100px"
            h="20px"
            w="20px"
            minW="0px"
            icon={<CopyIcon boxSize={6} />}
            aria-label="copy link"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          />
          <TextRegular opacity="0.5" fontSize="14px">
            Copy Link
          </TextRegular>
        </HStack>
        <HStack>
          <IconButton
            bg="transparent"
            p="0"
            icon={<FbIconBlack boxSize="6"/>}
            aria-label="facebook share"
            _hover={{ bg: 'transparent' }}
            borderRadius="100px"
            h="20px"
            w="20px"
            minW="0px"
          />
          <TextRegular opacity="0.5" fontSize="14px">
            Copy Link
          </TextRegular>
        </HStack>
      </HStack>
    </Box>
  );
};
