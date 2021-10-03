import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, Heading, HStack } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import Divider from 'components/atoms/Divider/DividerVertical';
import { BurgerIcon } from 'components/atoms/Icons/BurgerIcon';
import { CloseIcon } from 'components/atoms/Icons/CloseIcon';
import { PersonIcon } from 'components/atoms/Icons/PersonIcon';
import { Text } from 'components/atoms/Text';
import { IconButton } from 'components/molecules/IconButton';
import { Currencies, Languages } from 'constants/index';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuMobile } from '../MenuMobile';
import { CurrencyPopover } from '../PopOvers/CurrencyPopover';
import { LanguagePopover } from '../PopOvers/LanguagePopover';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currencies>(Currencies.EUR);
  const [lang, setLang] = useState<Languages>(Languages.ENG);

  // if menu open stop body scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [menuOpen]);

  // curency change popover
  const {
    onOpen: openCurr,
    onClose: closeCurr,
    isOpen: isCurrOpen,
  } = useDisclosure();

  // language change popover
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
        {/* mobile view profile and menu hamburger*/}
        <HStack ml="auto" display={['flex', 'flex', 'none']}>
          <IconButton icon={PersonIcon} />
          <IconButton
            icon={BurgerIcon}
            onClick={() => setMenuOpen(true)}
            display={menuOpen ? 'none' : 'inline-block'}
          />
          <IconButton
            icon={CloseIcon}
            display={menuOpen ? 'block' : 'none'}
            onClick={() => setMenuOpen(false)}
          />
        </HStack>
      </Flex>
      {/* menu navigation menu*/}
      <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Container>
  );
};
