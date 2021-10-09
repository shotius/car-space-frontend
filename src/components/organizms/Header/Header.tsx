import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Flex, HStack, StackDivider } from '@chakra-ui/layout';
import { IconWithButton } from 'components/molecules/IconWithButton';
import { ContainerOuter } from 'components/atoms/Containers/ContainerOuter';
import { BurgerIcon } from 'components/atoms/Icons/BurgerIcon';
import { CloseIcon } from 'components/atoms/Icons/CloseIcon';
import { PersonIcon } from 'components/atoms/Icons/PersonIcon';
import { TextRegular } from 'components/molecules/Texts/TextRegular';
import { Currencies, Languages } from 'constants/index';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MenuMobile } from '../MenuMobile';
import { CurrencyPopover } from '../PopOvers/CurrencyPopover';
import { LanguagePopover } from '../PopOvers/LanguagePopover';
import Icon from '@chakra-ui/icon';
import { LogoIcon } from 'components/atoms/Icons/LogoIcon';
import { Logo } from 'components/atoms/Logo';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currencies>(Currencies.EUR);
  const [lang, setLang] = useState<Languages>(Languages.ENG);
  const history = useHistory();

  // if menu open stop body scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
    <ContainerOuter
      zIndex="13"
      boxShadow={menuOpen ? 'md' : 'none'}
      h="full"
      bg="white"
    >
      {/* desktop view */}
      <Flex h="full" alignItems="center" zIndex="10">
        <Logo
          icon={LogoIcon}
          onClick={() => {
            setMenuOpen(false);
            history.push('/home');
          }}
        />
        <HStack
          ml="auto"
          display={['none', 'none', 'flex']}
          spacing={[null, null, '16px', '24px']}
          divider={<StackDivider />}
        >
          <HStack spacing={[null, null, '16px', '24px', '32px']}>
            <TextRegular>
              <Link to="/catalog">Catalog</Link>
            </TextRegular>
            <TextRegular>
              <Link to="/services">Services</Link>
            </TextRegular>
            <TextRegular>
              <Link to="/blog">Blog</Link>
            </TextRegular>
          </HStack>
          <HStack
            spacing={[null, null, '0px', '8px']}
            mr={[null, null, '-20px', '-15px']}
          >
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
          </HStack>
          {/* <Divider height="35px" borderColor="gray.500" /> */}
          <HStack spacing="4" ml="-15px">
            <Button
              variant="ghost"
              fontWeight="light"
              fontSize="16px"
              onClick={() => history.push('/login')}
            >
              <TextRegular>Log in</TextRegular>
            </Button>
            <Button
              backgroundColor="white"
              fontWeight="light"
              borderColor="#565656"
              borderWidth="1px"
              onClick={() => history.push('/register')}
            >
              <Icon as={PersonIcon} boxSize="4" />
              <TextRegular ml="1">Register</TextRegular>
            </Button>
          </HStack>
        </HStack>
        {/* mobile view profile and menu hamburger*/}
        <HStack ml="auto" display={['flex', 'flex', 'none']}>
          <IconWithButton icon={PersonIcon} boxSize="17px" mr="-4" pt="0px" />
          <IconWithButton
            icon={BurgerIcon}
            onClick={() => setMenuOpen(true)}
            display={menuOpen ? 'none' : 'inline-block'}
          />
          <IconWithButton
            icon={CloseIcon}
            display={menuOpen ? 'block' : 'none'}
            onClick={() => setMenuOpen(false)}
          />
        </HStack>
      </Flex>
      {/* menu navigation menu*/}
      <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </ContainerOuter>
  );
};
