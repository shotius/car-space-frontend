import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Collapse } from '@chakra-ui/transition';
import { Link, useHistory } from 'react-router-dom';
import { CarSpaceLogo } from 'src/components/atoms/CarSpaceLogo';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Text } from 'src/components/atoms/Text';
import { SocialLinks } from 'src/components/molecules/Links/SocialLinks';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  // when screen is larger then 768px open all the colapsable info
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const history = useHistory();

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
          <CarSpaceLogo
            mb={['32px', null, '0px']}
            imgW={['100px', null, '167px']}
            onClick={() => {
              history.push('/home');
            }}
          />
          <SocialLinks display={['none', 'none', 'flex']} />
        </Stack>

        <VStack spacing="0" alignItems={['center', null, 'flex-start']}>
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
              <Text> <Link to="/services">ლიზინგი</Link></Text>
              <Text> <Link to="/services">შიდა დაზღვევა</Link></Text>
              <Text> <Link to="/services">მანქანის იმპორტი</Link></Text>
              <Text> <Link to="/services">მანქანის შერჩევა</Link></Text>
            </VStack>
          </Collapse>
        </VStack>

        <VStack spacing={0} alignItems={['center', null, 'flex-start']}>
          <Button variant="link" color="#000" onClick={onContactToggle} mb="4">
            Contact
          </Button>
          <Collapse in={isContactOpen}>
            <VStack
              alignItems={['center', null, 'flex-start']}
              spacing={0}
              mb="6"
            >
              <Text>ქ. თბილისი, შროშის ქ. N1</Text>
              <Text>Tel: 032 2 988 687</Text>
              <Text>Mobile: +995 555 48 45 86</Text>
              <Text>Email: info@carspace.ge</Text>
            </VStack>
          </Collapse>
        </VStack>

        <VStack spacing="0" alignItems={['center', null, 'flex-start']}>
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
                Privacy Policy
                {/* <Link to="/">Privacy Policy</Link> */}
              </Text>
              <Text>
                Terms & conditions
                {/* <Link to="/">Terms & conditions</Link> */}
              </Text>
            </VStack>
          </Collapse>
          <SocialLinks display={['flex', 'flex', 'none']} />
        </VStack>
      </Stack>
    </ContainerOuter>
  );
};
