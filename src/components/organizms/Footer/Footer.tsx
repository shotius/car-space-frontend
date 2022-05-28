import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Stack, VStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Collapse } from '@chakra-ui/transition';
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { CarSpaceLogo } from 'src/components/atoms/CarSpaceLogo';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { SocialLinks } from 'src/components/molecules/Links/SocialLinks';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

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
            h={['20px', '25px', null, '30px']}
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
              <TextRegular fontSize={'14px'}>
                {' '}
                {/* <HashLink to="/services#leasing">ლიზინგი</HashLink> */}
                <a href="/services#leasing">ლიზინგი</a>
              </TextRegular>
              <TextRegular fontSize={'14px'}>
                {' '}
                <HashLink to="/services#installment">შიდა დაზღვევა</HashLink>
              </TextRegular>
              <TextRegular fontSize={'14px'}>
                {' '}
                <HashLink to="/services#carimport">მანქანის იმპორტი</HashLink>
              </TextRegular>
              <TextRegular fontSize={'14px'}>
                {' '}
                <HashLink to="/services#carimport">მანქანის შერჩევა</HashLink>
              </TextRegular>
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
              <TextRegular fontSize={'14px'}>შალვა ნუცუბიძის 75ა</TextRegular>
              <TextRegular fontSize={'14px'}>
                <a href="tel:032-2-988-687">Tel: 032 2 988 687</a>
              </TextRegular>
              <TextRegular fontSize={'14px'}>
                <a href="tel:+995-555-48-45-86">Mobile: +995 555 48 45 86</a>
              </TextRegular>
              <TextRegular fontSize={'14px'}>
                <a href="mailto:info@carspace.ge">Email: info@carspace.ge</a>
              </TextRegular>
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
              <TextRegular fontSize={'14px'}>
                Privacy Policy
                {/* <Link to="/">Privacy Policy</Link> */}
              </TextRegular>
              <TextRegular fontSize={'14px'}>
                Terms & conditions
                {/* <Link to="/">Terms & conditions</Link> */}
              </TextRegular>
            </VStack>
          </Collapse>
          <SocialLinks display={['flex', 'flex', 'none']} />
        </VStack>
      </Stack>
    </ContainerOuter>
  );
};
