import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, HStack, StackDivider } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BurgerIcon } from 'src/components/atoms/Icons/BurgerIcon';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { LogoIcon } from 'src/components/atoms/Icons/LogoIcon';
import { PersonIcon } from 'src/components/atoms/Icons/PersonIcon';
import { Logo } from 'src/components/atoms/Logo';
import { MenuLink } from 'src/components/molecules/Links/MenuLink';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Currencies, Languages } from 'src/constants/index';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MenuMobile } from '../LoginForm/MenuMobile';
import { CurrencyPopover } from '../PopOvers/CurrencyPopover';
import { LanguagePopover } from '../PopOvers/LanguagePopover';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { Center } from '@chakra-ui/react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currencies>(Currencies.EUR);
  const [lang, setLang] = useState<Languages>(Languages.ENG);
  const { isDesktop, isMobile, isTablet } = useDetectScreen();
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
    // onOpen: openCurr,
    onClose: closeCurr,
    onToggle: toggleCurr,
    isOpen: isCurrOpen,
  } = useDisclosure();

  // language change popover
  const {
    onToggle: toggleLang,
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
        {/* menu links Desktop*/}
        {isDesktop ? (
          <HStack
            ml="auto"
            display={['none', 'none', 'flex']}
            spacing={[null, null, '16px']}
            divider={
              <Center>
                <StackDivider h="25px" />
              </Center>
            }
          >
            <HStack spacing={[null, null, '16px', '24px', '32px']}>
              <MenuLink to="/catalog" label="Catalog" />
              <MenuLink to="/services" label="Services" />
              <MenuLink to="/blog" label="Blog" />
            </HStack>
            {/* popovers */}
            <HStack
              spacing={[null, null, '0px', '8px']}
              mr={[null, null, '-20px', '-15px']}
            >
              {/* choose currency */}
              <CurrencyPopover
                isOpen={isCurrOpen}
                closeCurrency={closeCurr}
                toggleCurrency={toggleCurr}
                // onOpen={openCurr}
                currency={currency}
                setCurrency={(currency) => setCurrency(currency)}
              />
              {/* choose languages */}
              <LanguagePopover
                isOpen={isLangOpen}
                closePopover={closeLang}
                togglePopover={toggleLang}
                lang={lang}
                setLanguage={(lang) => setLang(lang)}
              />
            </HStack>
            {/* <Divider height="35px" borderColor="gray.500" /> */}
            <HStack spacing={[null, null, '0', '2', null, '4']} ml="-15px">
              <Button
                variant="ghost"
                fontWeight="light"
                fontSize="16px"
                onClick={() => history.push('/login')}
                _hover={{
                  bg: 'autoGrey.200',
                }}
              >
                <TextRegular>Log in</TextRegular>
              </Button>
              <Button
                backgroundColor="white"
                fontWeight="light"
                borderColor="#565656"
                borderWidth="1px"
                onClick={() => history.push('/register')}
                borderRadius="8px"
                w="100px"
                transition="all 0.5s"
                _hover={{
                  bg: 'autoGrey.200',
                  border: 'white',
                }}
              >
                <Icon as={PersonIcon} boxSize="4" />
                <TextRegular ml="1">Register</TextRegular>
              </Button>
            </HStack>
          </HStack>
        ) : null}

        {/* mobile view profile and menu hamburger*/}
        {isMobile || isTablet ? (
          <HStack ml="auto" display={['flex', 'flex', 'none']} spacing={0}>
            <IconButton
              aria-label="profile"
              icon={<PersonIcon boxSize="5" />}
              bg="transparent"
            />
            <IconButton
              aria-label="menu"
              icon={<BurgerIcon boxSize="6" />}
              bg="transparent"
              onClick={() => setMenuOpen(true)}
              display={menuOpen ? 'none' : 'inline-block'}
            />

            <IconButton
              aria-label="close menu"
              icon={<CloseIcon boxSize="6" />}
              display={menuOpen ? 'block' : 'none'}
              onClick={() => setMenuOpen(false)}
              bg="transparent"
              opacity={menuOpen ? '1' : '0'}
              transition="all ease .2"
            />
            <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </HStack>
        ) : null}
      </Flex>
      {/* menu navigation menu*/}
    </ContainerOuter>
  );
};
