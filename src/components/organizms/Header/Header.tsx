import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, HStack, StackDivider } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BurgerIcon } from 'src/components/atoms/Icons/BurgerIcon';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { LogoIcon } from 'src/components/atoms/Icons/LogoIcon';
import { PersonIcon } from 'src/components/atoms/Icons/PersonIcon';
import { Logo } from 'src/components/atoms/Logo';
import { MenuLink } from 'src/components/molecules/Links/MenuLink';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Currencies, Languages } from 'src/constants/index';
import { useAppSelector } from 'src/redux/app/hook';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { LoginRegisterDrawer } from '../Drawers/LoginRegisterDrawer';
import { MenuMobile } from '../LoginForm/MenuMobile';
import { LoginModal } from '../Modals/LoginModal';
import { RegisterModal } from '../Modals/RegisterModal';
import { CurrencyPopover } from '../PopOvers/CurrencyPopover';
import { LanguagePopover } from '../PopOvers/LanguagePopover';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currencies>(Currencies.EUR);
  const [lang, setLang] = useState<Languages>(Languages.ENG);
  const { isDesktop, isMobile, isTablet } = useDetectScreen();
  const { isAuthenticated, role, username } = useAppSelector(
    (state) => state.authReducer
  );
  const history = useHistory();

  const [safeDocument, setSafeDocument] = useState<Document | null>(document);

  //login modal
  const {
    isOpen: isLoginOpen,
    onOpen: openLogin,
    onClose: closeLogin,
  } = useDisclosure();

  // register modal
  const {
    isOpen: isRegisterOpen,
    onOpen: openRegister,
    onClose: closeRegister,
  } = useDisclosure();

  // if mobile menu is open stop body scroll
  useEffect(() => {
    setSafeDocument(document);
    if (safeDocument) {
      if (menuOpen === true) {
        safeDocument.body.style.overflow = 'hidden';
      } else {
        safeDocument.body.style.overflow = 'auto';
      }
    }
    // clean up, without it I had a problem in nested routes
    return () => {
      setSafeDocument(null);
    };
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

  // Mobile login register Drawer
  const {
    isOpen: isLoginRegisterOpen,
    onOpen: openLoginRegister,
    onClose: closeLoginRegister,
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

            {/* if user is authenticated login and register buttons are not shown */}
            {isAuthenticated ? (
              <Button
                onClick={() => history.push(`/${role}/dashboard`)}
                variant="ghost"
                fontWeight="light"
                fontSize="16px"
                _hover={{
                  bg: 'autoGrey.200',
                }}
                ml="-4"
              >
                <Icon as={PersonIcon} boxSize="4" mr="2" />
                {username}
              </Button>
            ) : (
              <HStack spacing={[null, null, '0', '2', null, '4']} ml="-15px">
                <Button
                  variant="ghost"
                  fontWeight="light"
                  fontSize="16px"
                  onClick={openLogin}
                  _hover={{
                    bg: 'autoGrey.200',
                  }}
                >
                  <TextRegular>Log in</TextRegular>
                </Button>
                <LoginModal
                  isOpen={isLoginOpen}
                  onClose={closeLogin}
                  openRegister={() => {
                    closeLogin();
                    openRegister();
                  }}
                />
                <Button
                  backgroundColor="white"
                  fontWeight="light"
                  borderColor="#565656"
                  borderWidth="1px"
                  onClick={openRegister}
                  borderRadius="8px"
                  w="100px"
                  transition="all 0.5s"
                  _hover={{
                    bg: 'autoGrey.200',
                    border: 'white',
                  }}
                >
                  <Icon as={PersonIcon} boxSize="4" />
                  <TextRegular ml="2" mt="1">
                    Register
                  </TextRegular>
                </Button>
                <RegisterModal
                  isOpen={isRegisterOpen}
                  onClose={closeRegister}
                  openLogin={() => {
                    closeRegister();
                    openLogin();
                  }}
                />
              </HStack>
            )}
          </HStack>
        ) : null}

        {/* mobile view profile and menu hamburger*/}
        {isMobile || isTablet ? (
          <HStack
            ml="auto"
            display={['flex', 'flex', null, 'none']}
            spacing={0}
          >
            <IconButton
              aria-label="profile"
              icon={<PersonIcon boxSize="5" />}
              bg="transparent"
              onClick={() => {
                // if authenticated: redirect to you page, else open login
                if (isAuthenticated) {
                  history.push(`/${role}/dashboard`);
                } else {
                  openLoginRegister();
                }
              }}
            />

            <LoginRegisterDrawer
              isOpen={isLoginRegisterOpen}
              onClose={closeLoginRegister}
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
