import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, Heading, HStack, VStack } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import Divider from 'components/atoms/Divider/DividerVertical';
import { PersonIcon } from 'components/atoms/Icons/PersonIcon';
import { Text } from 'components/atoms/Text';
import { IconButton } from 'components/molecules/IconButton';
import { NavMenuLink } from 'components/molecules/NavMenuLink/NavMenuLink';
import { Currencies, Languages } from 'constants/index';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CurrencyPopover } from '../PopOvers/CurrencyPopover';
import { LanguagePopover } from '../PopOvers/LanguagePopover';
import { UKIcon } from 'components/atoms/Icons/UKIcon';
import { BurgerIcon } from 'components/atoms/Icons/BurgerIcon';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currencies>(Currencies.EUR);
  const [lang, setLang] = useState<Languages>(Languages.ENG);

  // if menu is open stop body to scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [menuOpen]);

  // curency popover
  const {
    onOpen: openCurr,
    onClose: closeCurr,
    isOpen: isCurrOpen,
  } = useDisclosure();

  // langugage change popover
  const {
    onOpen: openLang,
    onClose: closeLang,
    isOpen: isLangOpen,
  } = useDisclosure();

  return (
    <Container
      maxW="1640px"
      zIndex="13"
      boxShadow={menuOpen ? 'md' : 'none'}
      h="full"
    >
      {/* desktop view */}
      <Flex h="full" alignItems="center" zIndex="10">
        <Heading cursor="pointer">
          <Link to="/home">Logo</Link>
        </Heading>
        <HStack ml="auto" display={['none', 'none', 'flex']} spacing="4">
          <Text fontSize="18px">
            <Link to="/catalog">Catalog</Link>
          </Text>
          <Text fontSize="18px">
            <Link to="/services">Services</Link>
          </Text>
          <Text fontSize="18px">
            <Link to="/blog">Blog</Link>
          </Text>
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
          <Button variant="ghost" fontWeight="light" fontSize="16px">
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="outline" fontWeight="light">
            <Icon mr="2" as={PersonIcon} />
            <Text ml="2">Register</Text>
          </Button>
        </HStack>
        {/* mobile view */}
        <HStack ml="auto" display={['flex', 'flex', 'none']}>
          <IconButton icon={PersonIcon} />
          <IconButton
            icon={BurgerIcon}
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
        top="50px"
        left="0"
        bottom="0"
        right="0"
        bg="white"
        pt="3"
        zIndex="-1"
        overflowY="scroll"
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
            <Icon as={UKIcon}/>
          </Button>
          <Button w="40%"> GEL</Button>
        </HStack>
      </VStack>
    </Container>
  );
};
