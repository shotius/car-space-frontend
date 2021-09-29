import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Box, Container, Flex, HStack, VStack } from '@chakra-ui/layout';
import Divider from 'components/atoms/Divider/Divider';
import { IconButton } from 'components/molecules/IconButton';
import { NavMenuLink } from 'components/molecules/NavMenuLink/NavMenuLink';
import { Currencies, Languages } from 'constants/index';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CurrencyPopover } from '../PopOvers/CurrencyPopover';
import { LanguagePopover } from '../PopOvers/LanguagePopover';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currencies>(Currencies.EUR);
  const [lang, setLang] = useState<Languages>(Languages.ENG);

  const {
    onOpen: openCurr,
    onClose: closeCurr,
    isOpen: isCurrOpen,
  } = useDisclosure();

  const {
    onOpen: openLang,
    onClose: closeLang,
    isOpen: isLangOpen,
  } = useDisclosure();
  return (
    <Container
      maxW="8xl"
      zIndex="13"
      boxShadow={menuOpen ? 'md' : 'none'}
      h="full"
    >
      {/* desktop view */}
      <Flex h="full" alignItems="center" zIndex="10">
        <Box cursor="pointer">
          <Link to="/home">Logo</Link>
        </Box>
        <HStack ml="auto" display={['none', 'none', 'flex']} spacing="4">
          <Link to="/catalog">Catalog</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Divider height="35px" borderColor="gray.500" />
          {/* choose currency */}
          <CurrencyPopover
            isOpen={isCurrOpen}
            onClose={closeCurr}
            onOpen={openCurr}
            currency={currency}
            setCurrency={(currency) => setCurrency(currency)}
          />
          {/* choose languages */}
          <LanguagePopover
            isOpen={isLangOpen}
            onClose={closeLang}
            onOpen={openLang}
            lang={lang}
            setLanguage={(lang) => setLang(lang)}
          />
          
          <Divider height="35px" borderColor="gray.500" />
          <Button variant="ghost" fontWeight="light">
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="outline" fontWeight="light">
            <Icon as={BsPerson} mr="1" /> Register
          </Button>
        </HStack>
        {/* mobile view */}
        <HStack ml="auto" display={['flex', 'flex', 'none']}>
          <IconButton icon={BsPerson} />
          <IconButton
            icon={AiOutlineMenu}
            onClick={() => setMenuOpen(true)}
            display={menuOpen ? 'none' : 'inline-block'}
          />
          <IconButton
            icon={AiOutlineClose}
            display={menuOpen ? 'block' : 'none'}
            onClick={() => setMenuOpen(false)}
          />
        </HStack>
      </Flex>
      {/* menu navigation */}
      <VStack
        position="fixed"
        display={menuOpen ? 'block' : 'none'}
        h="100vh"
        w="100vw"
        top="50px"
        left="0"
        bg="white"
        px="4"
        pt="3"
        zIndex="-1"
      >
        <NavMenuLink
          heading="Catalog"
          to="/catalog"
          onClick={() => setMenuOpen(false)}
        />
        <NavMenuLink heading="Services" to="/services" />
        <NavMenuLink heading="Blog" to="/blog" />
        <NavMenuLink heading="MiniCategory" to="/miniCategory" />
        <NavMenuLink heading="Top Brands" to="/topBrands" />
        <NavMenuLink heading="Dealers" to="/dealers" />
        <NavMenuLink heading="Contact" to="/contact" />
        <HStack justifyContent="space-around" pt="4" spacing="2">
          <Button w="40%">
            <Icon />
          </Button>
          <Button w="40%"> GEL</Button>
        </HStack>
      </VStack>
    </Container>
  );
};
