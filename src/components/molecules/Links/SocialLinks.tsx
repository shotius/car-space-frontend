import { HStack, StackProps } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { FbIcon } from 'src/components/atoms/Icons/FacebookIcon';
import { InstagramIcon } from 'src/components/atoms/Icons/InsagramIcon';
import { TwitterIcon } from 'src/components/atoms/Icons/TwitterIcon';

interface SocialLinksProps {}

export const SocialLinks: React.FC<SocialLinksProps & StackProps> = ({...rest}) => {
  return (
    <HStack pt="8" spacing="4" {...rest}>
      <IconButton
        icon={<InstagramIcon boxSize="12" />}
        aria-label="instagram link"
        bg="transparent"
      />
      <IconButton
        icon={<TwitterIcon boxSize="12" />}
        aria-label="Twitter link"
        bg="transparent"
      />
      <IconButton
        icon={<FbIcon boxSize="12" />}
        aria-label="facebook link"
        bg="transparent"
      />
    </HStack>
  );
};
