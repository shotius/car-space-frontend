import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Collapse } from '@chakra-ui/transition';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { LogoIcon } from 'src/components/atoms/Icons/LogoIcon';
import { Logo } from 'src/components/atoms/Logo';
import { Text } from 'src/components/atoms/Text';
import { SocialLinks } from 'src/components/molecules/SocialLinks';
 ;
import { Link } from 'react-router-dom';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  // when screen is larger then 768px open all the colapsable info
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  // open close Service info
  const { isOpen: isServicesOpen, onToggle: onServicesToggle } = useDisclosure({
    isOpen: isLargerThan768 ? true : undefined,
  });

  // open close Contact info
  const { isOpen: isContactOpen, onToggle: onContactToggle } = useDisclosure({
    isOpen: isLargerThan768 ? true : undefined,
  });

  // open close Legal info
  const { isOpen: isLegalOpen, onToggle: onLegalToggle } = useDisclosure({
    isOpen: isLargerThan768 ? true : undefined,
  });

  return (
    <ContainerOuter p={12} pb="24" minH="100px" bg="#e8e8e8" mt="auto">
      <Stack
        alignItems={['center', null, 'flex-start']}
        direction={['column', null, 'row']}
        justify="space-between"
      >
        <Stack>
          <Logo icon={LogoIcon} boxSize={['150px', null, null, '200px']} />
          <SocialLinks display={['none', 'none', 'flex']} />
        </Stack>

        <VStack
          spacing="0"
          alignItems={['center', null, 'flex-start']}
          pt={['0px', null, '4']}
        >
          <Button
            fontWeight="bold"
            mb="4"
            onClick={onServicesToggle}
            variant="link"
            color="#000"
          >
            Services
          </Button>
          <Collapse in={isServicesOpen}>
            <VStack
              alignItems={['center', null, 'flex-start']}
              spacing={0}
              mb="6"
            >
              <Text>
                <Link to="/services">Services</Link>
              </Text>
              <Text>info@example.com</Text>
            </VStack>
          </Collapse>
        </VStack>

        <VStack
          spacing={0}
          alignItems={['center', null, 'flex-start']}
          pt={['0px', null, '4']}
        >
          <Button variant="link" color="#000" onClick={onContactToggle} mb="4">
            Contact
          </Button>
          <Collapse in={isContactOpen}>
            <VStack
              alignItems={['center', null, 'flex-start']}
              spacing={0}
              mb="6"
            >
              <Text>Address</Text>
              <Text>+995 12123123</Text>
              <Text>info@example.com</Text>
            </VStack>
          </Collapse>
        </VStack>

        <VStack
          spacing="0"
          alignItems={['center', null, 'flex-start']}
          pt={['0px', null, '4']}
        >
          <Button variant="link" color="#000" onClick={onLegalToggle} mb="4">
            Legal
          </Button>
          <Collapse in={isLegalOpen}>
            <VStack
              alignItems={['center', null, 'flex-start']}
              spacing={0}
              mb="6"
            >
              <Text>
                <Link to="/privacy">Privacy Policy</Link>
              </Text>
              <Text>
                <Link to="/terms">Terms & conditions</Link>
              </Text>
            </VStack>
          </Collapse>
          <SocialLinks display={['flex', 'flex', 'none']} />
        </VStack>
      </Stack>
    </ContainerOuter>
  );
};
