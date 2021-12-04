import { HStack, StackProps } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { FbIcon } from 'src/components/atoms/Icons/FacebookIcon';
import { TwitterIcon } from 'src/components/atoms/Icons/TwitterIcon';
import { InstagramButton } from '../Buttons/InstagramButton';

interface SocialLinksProps {}

export const 
SocialLinks: React.FC<SocialLinksProps & StackProps> = ({...rest}) => {
  return (
    <HStack pt="8" spacing="4" {...rest}>
      <InstagramButton bg="#f4f4f5"/>      
      <IconButton
        icon={<TwitterIcon boxSize="12" bg="#f4f4f5" borderRadius="100px"/>}
        aria-label="Twitter link"
        bg="transparent"
      />
      <IconButton
        icon={<FbIcon boxSize="12" bg="#f4f4f5" borderRadius="100px"/>}
        aria-label="facebook link"
        bg="transparent"
      />
    </HStack>
  );
};
